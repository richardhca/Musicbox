var {EntitySchema} = require('typeorm');

module.exports = new EntitySchema({
    // "User" is taken by postgres by default, so we use "Users" instead.
    name: 'Users',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid'
        },
        email: {
            type: 'character varying',
            unique: true,
            length: 255,
            nullable: false,
        },
        password: {
            type: 'character varying',
            nullable: false
        },
        username: {
            type: 'character varying',
            unique: true,
            nullable: false,
            length: 35
        },
        first_name: {
            type: 'character varying',
            length: 35,
            nullable: true
        },
        last_name: {
            type: 'character varying',
            length: 35,
            nullable: true
        },
        date_of_birth: {
            type: 'date',
            nullable: false
        },
        user_type: {
            type: 'character varying',
            enum: ['user', 'admin'],
            default: 'user'
        },
        emailConfirmed: {
            type: 'boolean',
            default: false
        },
        creation_date: {
            type: 'timestamp',
            nullable: false
        }
    }
});
