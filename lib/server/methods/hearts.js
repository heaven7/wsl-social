Meteor.methods({
    'heartsCount': (doc) => {
        check(doc, String)
        return Hearts.find({doc}).count()
    },
    'addHeart': (doc, docType) => {
        check(doc, String)
        check(docType, String)
        let heart = Hearts.findOne({doc, docType, owner: Meteor.userId()})
        if(!heart) Hearts.insert({doc, docType, owner: Meteor.userId()})
    },
    'removeHeart': (id) => {
        check(id, String)
        Hearts.remove(id)
    },
    'toggleHeart': (doc, docType) => {
        check(doc, String)
        check(docType, String)
        let heart = Hearts.findOne({doc, docType, owner: Meteor.userId()})
        if(heart) Meteor.call('removeHeart', heart._id)
        else Meteor.call('addHeart', doc, docType)
    },
    isHeartedByUser: (doc, docType, userId) => !!Hearts.findOne({doc, docType, owner: userId})
})