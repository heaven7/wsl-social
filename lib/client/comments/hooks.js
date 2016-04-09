/**
 * Collection hooks
 */

WSL.collection.addOwnershipBefore(Comments)

/**
 * Autoform hooks
 */

AutoForm.hooks({
    commentsForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            return console.log(error)
        },
        onSuccess: function(insert, doc) {
            console.log(insert, doc)
        }
    }
})