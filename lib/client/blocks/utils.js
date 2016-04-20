isBlockedDoc = (userId, doc) => {
    if(userId && doc) {
        return !!Blocks.findOne({userId, doc})
    }
    return false
}

isBlockedCollection = (userId, docType) => {
    if(userId && docType) {
        return !!Blocks.findOne({userId, docType})
    }
    return false
}