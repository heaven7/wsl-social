Meteor.publish('Comments', id => {
    if(id) {
        check(id, String)
        return Comments.find({doc: id})
    }
    return false
})

Meteor.publish('Hearts', id => {
    if(id) {
        check(id, String)
        return Hearts.find({doc: id})
    }
    return false
})

Meteor.publish('Blocks', function(doc, docType) {

    // get all the blocks of the users doc
    if(doc && docType == null) {
        check(doc, String)
        return Blocks.find({doc, userId: this.userId})
    }

    // get all blocks of the users collection
    if(docType && doc == null) {
        check(docType, String)
        return Blocks.find({docType, userId: this.userId})
    }

    if(doc && docType) {
        check(doc, String)
        check(docType, String)
        return Blocks.find({doc, docType, userId: this.userId})
    }

    // get all blocks done by the user itself
    return Blocks.find({owner: this.userId})
})