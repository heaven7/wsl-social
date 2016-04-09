/**
 * Comments schema
 * @type {SimpleSchema} Schemas.Comments
 */

Schemas.Comments = new SimpleSchema([Schemas.Base, {

    content: {
        type: String,
        min: 1,
        max: 10000,
        optional: true
    },

    'media.type': {
        type: String,
        optional: true
    },
    'media.content': {
        type: String,
        optional: true
    },

    parent: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    }

}])

/**
 * Attach schemas
 */

Comments.attachSchema(Schemas.Comments)
