Template.registerHelper('heartsCount', (id) => {
    if(id) {
        let handle = Meteor.subscribe('Hearts', id)
        if(handle.ready())
            return Hearts.find({doc: id}).count()
    }
})

Template.registerHelper('isHeartedByUser', (doc, docType, userId) => {
    if(doc && docType && userId) {
        return Social.hearts.isHeartedByUser(doc, docType, userId)
    }
})