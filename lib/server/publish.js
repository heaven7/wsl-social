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
    if(doc && docType == null) {
        check(doc, String)
        return Blocks.find({doc})
    }

    if(docType && doc == null) {
        check(docType, String)
        return Blocks.find({docType})
    }

    if(doc && docType) {
        check(doc, String)
        check(docType, String)
        return Blocks.find({doc, docType})
    }

    return Blocks.find({owner: this.userId})
})