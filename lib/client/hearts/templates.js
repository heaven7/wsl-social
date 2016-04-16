Template.heartComment.events({
    'click .heart-action': (e,t) => {
        let doc = t.data.id
        let docType = 'Comments'
        Social.hearts.toggle(doc, docType)
    }
})

Template.heartComment.helpers({
    currentUserId: () => Meteor.userId()
})