Social.hearts = {
    count: (doc) => heartsCount(doc),
    isHeartedByUser: (doc, docType, userId) => isHeartedByUser(doc, docType, userId),
    add: (doc, docType) => {
        Meteor.call('addHeart', doc, docType)
        updateHearts(doc, docType)
    },
    remove: (doc, docType) => {
        Meteor.call('removeHeart', doc, docType)
        updateHearts(doc, docType)
    },
    toggle: (doc, docType) => {
        Meteor.call('toggleHeart', doc, docType)
        updateHearts(doc, docType)
    },
    session: new ReactiveDict()
}