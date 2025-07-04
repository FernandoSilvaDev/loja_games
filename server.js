'use strict'
export const __esModule = true
// eslint-disable-next-line @typescript-eslint/no-var-requires
import json_server_1 from 'json-server'
var server = json_server_1['default'].create()
var router = json_server_1['default'].router('db.json')
var middlewares = json_server_1['default'].defaults()
server.use(middlewares)
server.use(router)
exports['default'] = function (req, res) {
  server(req, res)
}
