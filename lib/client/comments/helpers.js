Template.registerHelper('commentsCount', (id) => {
    if(id)
        return Social.comments.count(id)
})

Template.registerHelper('getComments', (doc, docType) => {
    if(doc && docType) {
        Meteor.call('getComments', doc, docType, (err, res) => {
            if(err)
                console.log(err)
            Social.comments.session.set(doc + '_comments', res)
        })
        return Social.comments.session.get(doc + '_comments')
    }

})