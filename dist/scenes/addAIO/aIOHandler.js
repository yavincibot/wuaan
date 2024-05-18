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
import * as keyboard from "../../utils/markupButton/permanantButton/keyboard.js";
import telegram from "../../services/telegram.js";
import env from "../../services/env.js";
import database from "../../services/database.js";
import getAIOdata from "./aIODocument.js";
import { sendToCOllection } from "../../utils/sendToCollection.js";
import { delay } from "../../extra/delay.js";
import getRandomId from "../../extra/getRandomId.js";
function askTitleAIO(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ctx.session.messageIds = [];
                    ctx.session.captions = [];
                    ctx.session.done = false;
                    return [4 /*yield*/, ctx.reply("```note\n you can not delete anything \n until the last step from here \n after you can \n cancel anytime say``` /cancel", {
                            parse_mode: "MarkdownV2",
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, ctx.reply("Send the AIO Title Caption ")];
                case 2:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
            }
        });
    });
}
function handleTitleAskPoster(ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 2];
                    ctx.session.aIOTitle = ctx.message.text;
                    (_a = ctx.session.captions) === null || _a === void 0 ? void 0 : _a.push(ctx.message.text);
                    return [4 /*yield*/, ctx.reply("Send me poster that realated to it (a Image Of) ")];
                case 1:
                    _b.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.scene.leave()];
                case 3: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
function handlePosterAskRelatedMsg(ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var photoFileId;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text === "/cancel")) return [3 /*break*/, 3];
                    return [4 /*yield*/, ctx.reply("Share AIO Canceled start again /addaio")];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    if (!(ctx.message && "photo" in ctx.message)) return [3 /*break*/, 5];
                    photoFileId = ctx.message.photo[0].file_id;
                    ctx.session.aIOPosterID = photoFileId;
                    ctx.session.messageIds = ctx.session.messageIds || [];
                    (_a = ctx.session.messageIds) === null || _a === void 0 ? void 0 : _a.push(ctx.message.message_id);
                    return [4 /*yield*/, ctx.reply("Send me files and message that realated to it ")];
                case 4:
                    _b.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 5: return [4 /*yield*/, ctx.reply("```Wrong \n  you need to send a image\n```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
function done(ctx) {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function () {
        var text, _f, backupChannel, messageIds, aIOPosterID, captions, aIOTitle, photoUrl, AIODetails, AIODetailsString, forwardedMessageIds, AIOData, shareId, botUsername, link, caption;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text === "/cancel")) return [3 /*break*/, 3];
                    return [4 /*yield*/, ctx.reply("Share AIO Canceled start again /addaio")];
                case 1:
                    _g.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 2: return [2 /*return*/, _g.sent()];
                case 3:
                    if (!ctx.message) return [3 /*break*/, 13];
                    text = "text" in ctx.message ? ctx.message.text : "";
                    if (!(text.toLowerCase() === "done" && !ctx.session.done)) return [3 /*break*/, 11];
                    _f = ctx.session, backupChannel = _f.backupChannel, messageIds = _f.messageIds, aIOPosterID = _f.aIOPosterID, captions = _f.captions;
                    aIOTitle = ctx.session.aIOTitle;
                    return [4 /*yield*/, getPhotoUrl(aIOPosterID)];
                case 4:
                    photoUrl = _g.sent();
                    AIODetails = {
                        aIOTitle: aIOTitle,
                        backupChannel: backupChannel,
                        messageIds: messageIds,
                        aIOPosterID: photoUrl,
                    };
                    AIODetailsString = JSON.stringify(AIODetails, null, 2);
                    return [4 /*yield*/, ctx.reply("```AIO details and file received.\n".concat(AIODetailsString, " \uD83C\uDF89```"), {
                            parse_mode: "MarkdownV2",
                        })];
                case 5:
                    _g.sent();
                    ctx.session.done = true;
                    return [4 /*yield*/, telegram.forwardMessages(env.dbAIOChannelId, (_a = ctx.chat) === null || _a === void 0 ? void 0 : _a.id, AIODetails.messageIds ? AIODetails.messageIds : [], false, captions)];
                case 6:
                    forwardedMessageIds = _g.sent();
                    AIOData = getAIOdata(AIODetails, forwardedMessageIds);
                    return [4 /*yield*/, database.saveAIO(AIOData)];
                case 7:
                    shareId = _g.sent();
                    botUsername = ctx.botInfo.username;
                    link = "https://t.me/".concat(botUsername, "?start=").concat(shareId, "-eng");
                    return [4 /*yield*/, ctx.reply(link)];
                case 8:
                    _g.sent();
                    return [4 /*yield*/, sendToCOllection(env.collectionAIO, aIOPosterID, link, aIOTitle || "none")];
                case 9:
                    _g.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 10: return [2 /*return*/, _g.sent()];
                case 11: return [4 /*yield*/, ctx.reply("Send next file if Done Click Done ".concat((_b = ctx.session.messageIds) === null || _b === void 0 ? void 0 : _b.length), keyboard.oneTimeDoneKeyboard())];
                case 12:
                    _g.sent();
                    (_c = ctx.session.messageIds) === null || _c === void 0 ? void 0 : _c.push(ctx.message.message_id);
                    caption = getRandomId().toString();
                    if ("caption" in ctx.message) {
                        caption = ctx.message.caption || "I_F";
                        ctx.session.captions = ctx.session.captions || [];
                        (_d = ctx.session.captions) === null || _d === void 0 ? void 0 : _d.push(caption);
                    }
                    else {
                        caption = "I_F";
                        ctx.session.captions = ctx.session.captions || [];
                        (_e = ctx.session.captions) === null || _e === void 0 ? void 0 : _e.push(caption);
                    }
                    _g.label = 13;
                case 13: return [2 /*return*/];
            }
        });
    });
}
export { askTitleAIO, handleTitleAskPoster, done, handlePosterAskRelatedMsg };
export function getPhotoUrl(photoId) {
    return __awaiter(this, void 0, void 0, function () {
        var success, photo, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    success = false;
                    _a.label = 1;
                case 1:
                    if (!!success) return [3 /*break*/, 11];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 10]);
                    return [4 /*yield*/, telegram.app.telegram.sendPhoto(env.dbPosterID, photoId)];
                case 3:
                    result = _a.sent();
                    return [4 /*yield*/, delay(1000, 4100)];
                case 4:
                    _a.sent();
                    photo = "".concat(env.dbPosterLink, "/").concat(result.message_id);
                    success = true;
                    return [3 /*break*/, 10];
                case 5:
                    error_1 = _a.sent();
                    success = false;
                    if (!(error_1.code === 429)) return [3 /*break*/, 7];
                    console.log("".concat(error_1));
                    return [4 /*yield*/, delay(40000, 41000)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 7:
                    console.log("".concat(error_1));
                    return [4 /*yield*/, delay(40000, 41000)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 1];
                case 11: return [2 /*return*/, photo || ""];
            }
        });
    });
}
