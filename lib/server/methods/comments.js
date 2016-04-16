Meteor.methods({
    'commentsCount': (doc) => {
        check(doc, String)
        return Comments.find({doc: doc}).count()
    },
    'getComments': (doc, docType) => {
        check(doc, String)
        check(docType, String)
        return Comments.find({doc, docType, parent: null}, {sort: {createdAt: -1}}).fetch()
    },
    'addComment': (doc) => {
        check(doc, Object)
        let owners = []
        owners.push(Meteor.userId())
        let obj = _.extend(doc, {owners})
        Comments.insert(obj)
    },
    'removeComment': (id) => {
        check(id, String)
        Comments.remove(id)
    }
})