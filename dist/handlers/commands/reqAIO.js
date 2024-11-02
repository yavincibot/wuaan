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
import { thankReply } from "../../utils/markupButton/permanantButton/lists.js";
import env from "../../services/env.js";
export default function reqAIOHandler(ctx, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var id, text, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message)) return [3 /*break*/, 11];
                    id = (_a = ctx.chat) === null || _a === void 0 ? void 0 : _a.id;
                    text = ctx.message.text;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 10, , 11]);
                    if (!(!/^\/(start|d|m|a)/i.test(text) && !/(?<!\S)[.!@#$%^&*()](?!\S)/.test(text))) return [3 /*break*/, 7];
                    if (!(env.withoutCmd.includes(id) &&
                        text.length > 4 &&
                        !text.startsWith("/s") &&
                        !text.startsWith("/h"))) return [3 /*break*/, 3];
                    return [4 /*yield*/, ctx.scene.enter("reqAIO")];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 3:
                    if (!(text.startsWith("/s") || text.startsWith("/h"))) return [3 /*break*/, 5];
                    return [4 /*yield*/, ctx.scene.enter("reqAIO")];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 5:
                    if (!(!ctx.message.reply_to_message &&
                        !text.includes("@") &&
                        !text.includes("/") &&
                        text.length > 4 &&
                        !containsEmoji(text))) return [3 /*break*/, 7];
                    return [4 /*yield*/, ctx.scene.enter("reqAIO")];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    if (!thankReply(text)) return [3 /*break*/, 9];
                    return [4 /*yield*/, ctx
                            .reply("If you really want to thank me so add two members for me\nhere my official Channel for updates and backup ".concat("@" + env.join))
                            .then(function (sentMessage) {
                            try {
                                var messageIdToDelete_1 = sentMessage.message_id;
                                setTimeout(function () {
                                    ctx.deleteMessage(messageIdToDelete_1);
                                }, 1 * 60 * 1000);
                            }
                            catch (_a) { }
                        })];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    error_1 = _b.sent();
                    return [3 /*break*/, 11];
                case 11:
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
function containsEmoji(str) {
    var emojiPattern = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
    return emojiPattern.test(str);
}
