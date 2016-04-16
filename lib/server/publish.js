Meteor.publish('Comments', (id) => {
    if(id)
        return Comments.find({doc: id})
    return false
})

Meteor.publish('Hearts', id => {
    if(id)
        return Hearts.find({doc: id})
    return false
})