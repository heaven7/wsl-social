/**
 * Blocks schema
 * @type {SimpleSchema} Schemas.Blocks
 */

Schemas.Blocks = new SimpleSchema([Schemas.Base, {

    reason: {
        type: String,
        optional: true
    }

}])

/**
 * Attach schemas
 */

Blocks.attachSchema(Schemas.Blocks)
