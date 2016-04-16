commentsCount = (doc) => {
    Meteor.call('commentsCount', doc, (err, res) => {
        if(err)
            console.log(err)
        Social.comments.session.set(doc, res)
    })
    return Social.comments.session.get(doc)
}

getComments = (doc, docType) => {
    Meteor.call('getComments', doc, docType, (err, res) => {
        if(err)
            console.log(err)
        Social.comments.session.set(doc + '_comments', res)
    })
    return Social.comments.session.get(doc + '_comments')
}