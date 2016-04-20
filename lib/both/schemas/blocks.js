/**
 * Blocks schema
 * @type {SimpleSchema} Schemas.Blocks
 */

Schemas.Blocks = new SimpleSchema([Schemas.Base, {

    userId: {
        type: String
    },

    reason: {
        type: String,
        optional: true
    },

    wholeCollection: {
        type: Boolean
    }

}])

/**
 * Attach schemas
 */

Blocks.attachSchema(Schemas.Blocks)
