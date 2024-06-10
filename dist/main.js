var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import express from "express";
import env from "./services/env.js";
import telegram from "./services/telegram.js";
import commands from "./handlers/commands/index.js";
import stage from "./scenes/index.js";
import { session } from "telegraf";
import database from "./services/database.js";
import filters from "./middleware/filters.js";
var app = telegram.app;
app.use(session());
app.use(stage.middleware());
app.use(filters.private);
app.use(commands.reqAIOHandler);
app.command("start", commands.startHandler);
app.command("eng", commands.reqAIOHandler);
app.command("addaio", commands.addAIOHandler);
app.command("editaio", commands.editAIOHandler);
app.catch(function (err, ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.error("Error in ".concat(ctx.updateType), err);
        return [2 /*return*/];
    });
}); });
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var domain, server, port_1, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, database.initialize()];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, telegram.initialize()];
                case 2:
                    _c.sent();
                    if (!env.development) return [3 /*break*/, 3];
                    app.launch({ dropPendingUpdates: true });
                    return [3 /*break*/, 5];
                case 3:
                    domain = env.webhookDomain;
                    if (!domain) {
                        throw Error("Please provide WEBHOOK_DOMAIN");
                    }
                    server = express();
                    server.get("/check", function (req, res) {
                        res.sendStatus(200);
                    });
                    port_1 = env.port;
                    _b = (_a = server).use;
                    return [4 /*yield*/, app.createWebhook({ domain: domain, path: "/zhao010203" })];
                case 4:
                    _b.apply(_a, [_c.sent()]);
                    server.listen(port_1, function () { return console.log("Server listening on ".concat(port_1)); });
                    _c.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
main();
process.once("SIGINT", function () { return app.stop("SIGINT"); });
process.once("SIGTERM", function () { return app.stop("SIGTERM"); });
