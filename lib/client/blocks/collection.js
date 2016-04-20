/**
 * Subscribe to the blocks collection
 */

Meteor.subscribe('Blocks')

/**
 * Returns all matching unblocked documents as an Array.
 * @memberOf Mongo.Cursor
 * @param {String} ownerfield
 * @method  unblocked
 * @instance
 * @locus Anywhere
 * @returns {Object[]}
 */
Mongo.Cursor.prototype.unblocked = function (ownerfield) {
    let collectionName = this.collection.name
    let res = []
    let blocked_res = []
    let userId = Meteor.userId()
    let blocks = Blocks.find({owner: userId}).fetch()

    this.forEach(function (doc) {
        if(doc[ownerfield]) {
            let owners = typeof doc[ownerfield] == 'object' ? doc[ownerfield] : [doc[ownerfield]]
            if(blocks.length > 0) {
                blocks.forEach(function (blocked) {
                    let blockedCollectionName = blocked.docType && blocked.docType.toLowerCase()
                    if(_.contains(owners, blocked.userId) && blocked.wholeCollection == true && blockedCollectionName == collectionName)  {
                        addDoc(blocked_res, doc)
                    } else if(_.contains(owners, blocked.userId) && blocked.doc == doc._id && blocked.docType == null) {
                        addDoc(blocked_res, doc)
                    }
                })
            } else {
                res.push(doc)
            }
        }
        if(!_.contains(blocked_res, doc))
            res.push(doc)
    })
    return res
}

/**
 * Returns all matching blocked documents as an Array.
 * @memberOf Mongo.Cursor
 * @param {String} ownerfield
 * @method  unblocked
 * @instance
 * @locus Anywhere
 * @returns {Object[]}
 */
Mongo.Cursor.prototype.blocked = function (ownerfield) {
    let collectionName = this.collection.name
    let res = []
    let blocked_res = []
    let userId = Meteor.userId()
    let blocks = Blocks.find({owner: userId}).fetch()

    this.forEach(function (doc) {
        if(doc[ownerfield]) {
            let owners = typeof doc[ownerfield] == 'object' ? doc[ownerfield] : [doc[ownerfield]]
            if(blocks.length > 0) {
                blocks.forEach(function (blocked) {
                    let blockedCollectionName = blocked.docType && blocked.docType.toLowerCase()
                    if(_.contains(owners, blocked.userId) && blocked.wholeCollection == true && blockedCollectionName == collectionName)  {
                        addDoc(blocked_res, doc)
                    } else if(_.contains(owners, blocked.userId) && blocked.doc == doc._id && blocked.docType == null) {
                        addDoc(blocked_res, doc)
                    }
                })
            }
        }
    })
    return blocked_res
}

let addDoc = (array, doc) => {
    if(!_.contains(array, doc))
        array.push(doc)
}