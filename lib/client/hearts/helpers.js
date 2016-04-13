Template.registerHelper('heartsCount', (id) => {
    if(id)
       return Social.hearts.count(id)
})

Template.registerHelper('isHeartedByUser', (doc, docType, userId) => {
    if(doc && docType && userId) {
        return Social.hearts.isHeartedByUser(doc, docType, userId)
    }
})