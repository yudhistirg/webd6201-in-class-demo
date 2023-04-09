"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const debug_1 = __importDefault(require("debug"));
(0, debug_1.default)('temp:server');
const http_1 = __importDefault(require("http"));
const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;
    return false;
};
const port = normalizePort(process.env.PORT || '3011');
app_1.default.set('port', port);
const onError = (error) => {
    if (error.syscall !== 'listen')
        throw error;
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
const onListening = () => {
    let addr = server.address();
    let bind = 'pipe ' + addr;
    (0, debug_1.default)('Listening on ' + bind);
};
const server = http_1.default.createServer(app_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
//# sourceMappingURL=server.js.map