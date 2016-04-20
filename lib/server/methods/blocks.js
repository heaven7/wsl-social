Meteor.methods({
    addBlock(userId, doc, docType, reason) {
        check(userId, String)

        let wholeCollection = false
        if(docType && !doc) {
            doc = null
            wholeCollection = true
        }

        let obj = {
            userId,
            doc,
            docType,
            reason,
            owner: Meteor.userId(),
            wholeCollection
        }

        Blocks.insert(obj)
    },

    removeBlock(id) {
        check(id, String)
        Blocks.remove(id)
    }
})