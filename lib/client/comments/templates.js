Template.commentsList.onCreated(function() {
    this.autorun(() => {
        this.subscribe('Comments', Template.currentData().id)
        this.subscribe('Users')
    })
})

Template.commentsList.helpers({
    commentItems: () => {
        let doc = Template.currentData().id
        let comments = Comments.find({doc, parent: null}, {sort: {createdAt: -1}}).fetch()
        if(comments) return comments.map(c => mapComment(c))
        return false
    }
})

Template.commentsList.events({
    'click .reply': (e,t) => {
        let target = $(e.currentTarget)
        let id = target.closest('.comment').attr('id')
        Session.set('replyComment', id)
    },
    'click .delete': (e,t) => {
        let target = $(e.currentTarget)
        let id = target.closest('.comment').attr('id')
        const confirmDeletion = confirm( i18n.t('confirm_delete_item') )

        if (confirmDeletion) {
            Social.comments.remove(id)
            wAlert.success(i18n.t('successfully_deleted'))
        }
    }
})

Template.insertCommentForm.events({
    'keydown .commentbox': (e,t) => {
        if( (!e.ctrlKey && (e.keyCode == 13)) ) {
            let id = '#' + Template.currentData().doc
            $('.commentbox').parents(id).submit()
        }
    }
})

Template.replyCommentForm.events({
    'keydown .commentbox': (e,t) => {
        if( (!e.ctrlKey && (e.keyCode == 13)) ) {
            $('#reply-comment-form').submit()
            Session.set('replyComment', null)
        }
    }
})

Template.replyCommentForm.helpers({
    parent: () => Template.currentData().id,
    doc: () => Comments.findOne(Template.currentData().id).doc,
    docType: () => Comments.findOne(Template.currentData().id).docType
})

let mapComment = (c) => {
    let owner = c.owners[0]
    let childComments = Comments.find({parent:c._id}, {sort: {createdAt: -1}}).fetch()
    return {
        id: c._id,
        date: mDate.timeAgo(c.createdAt),
        user: Meteor.users.findOne(owner),
        username: Meteor.users.findOne(owner).username,
        content: c.content,
        replyText: i18n.t('reply'),
        replyTemplate: 'replyCommentForm',
        commentItems: childComments ? childComments.map(cc => mapComment(cc)) : null,
        replyComment: Session.get('replyComment') == c._id,
        canDelete: Meteor.userId() === owner,
        deleteText: i18n.t('delete'),
        canLike: true,
        likeTemplate: 'heartComment'
    }
}