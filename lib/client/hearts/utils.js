updateHearts = (doc, docType) => {
    heartsCount(doc)
    isHeartedByUser(doc, docType, Meteor.userId())
}

isHeartedByUser = (doc, docType, userId) => {
    Meteor.call('isHeartedByUser', doc, docType, userId, (err, res) => {
        if(err)
            console.log(err)
        Social.hearts.session.set(doc + '_hearted', res)
    })
    return Social.hearts.session.get(doc + '_hearted')
}

heartsCount = (doc) => {
    Meteor.call('heartsCount', doc, (err, res) => {
        if(err)
            console.log(err)
        Social.hearts.session.set(doc, res)
    })
    return Social.hearts.session.get(doc)
}