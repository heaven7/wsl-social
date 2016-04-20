Social.block = {
    /**
     * Block a collection of a user
     * @param {String} userId
     * @param {String} docType
     * @param {String} reason
     */

    collectionOf: (userId, docType, reason) => {
        Meteor.call('addBlock', userId, null, docType, reason)
    },

    /**
     * Block a document of a user
     * @param {String} userId
     * @param {String} doc
     * @param {String} reason
     */

    docOf: (userId, doc, reason) => {
        Meteor.call('addBlock', userId, doc, null, reason)
    }
}

Social.unblock = {
    /**
     * Remove a blocked collection of a user
     * @param {String} userId
     * @param {String} docType
     * @param {String} reason
     */

    collectionOf: (userId, docType) => {
        let block = Blocks.findOne({userId, docType})
        Meteor.call('removeBlock', block._id)
    },

    /**
     * Remove a blocked doc of a user
     * @param {String} userId
     * @param {String} doc
     */

    docOf: (userId, doc) => {
        let block = Blocks.findOne({userId, doc})
        Meteor.call('removeBlock', block._id)
    }
}