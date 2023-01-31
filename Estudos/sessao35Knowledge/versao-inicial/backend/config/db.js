const { __esModule } = require('knex/lib/functionhelper.js')
const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])

module.exports = knex