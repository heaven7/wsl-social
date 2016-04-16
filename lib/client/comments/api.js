Social.comments = {
    count: (doc) => commentsCount(doc),
    get: (doc, docType) => {
        Meteor.call('getComments', doc, docType, (err, res) => {
            if(res) {
                Social.comments.session.set(doc + '_comments', res)
            }
        })
    },
    add: (doc, docType) => Meteor.call('addComment', doc, docType),
    remove: (doc) => Meteor.call('removeComment', doc),
    session: new ReactiveDict()
}