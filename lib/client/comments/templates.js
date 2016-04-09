Template.commentsList.onCreated(function() {
    this.autorun(() => {
        let id = Template.currentData().id
        let type = Template.currentData().docType
        this.subscribe('Comments', id, type)
        this.subscribe('Users')
    })
})

Template.commentsList.helpers({
    commentItems: () => {
        let comments = Comments.find({doc: Template.currentData().id}, {sort: {createdAt: -1}}).fetch()
        return comments.map(c => {
            let owner = c.owners[0]
            return {
                date: mDate.timeAgo(c.createdAt),
                user: Meteor.users.findOne(owner),
                username: Meteor.users.findOne(owner).username,
                content: c.content,
                canEdit: Meteor.userId() === owner ? true : false,
                replyText: i18n.t('reply'),
                editText: i18n.t('edit')
            }
        })
    }
})

Template.commentsForm.events({
    'keydown .commentbox': (e,t) => {
        if( (!e.ctrlKey && (e.keyCode == 13)) ) {
            let id = '#' + Template.currentData().doc
            $('.commentbox').parents(id).submit()
        }
    }
})