Meteor.publish('Comments', (id, type) => {
    if(id)
        return Comments.find({doc: id})

    return false
})