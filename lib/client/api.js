Social = {
    hearts: {
        count: (doc) => heartsCount(doc),
        add: (doc, docType) => {
            Meteor.call('addHeart', doc, docType)
            Social.hearts.count(doc)
        },
        session: new ReactiveDict()
    }
}