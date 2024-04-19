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
import getAnimedata from "./animeDocument.js";
import * as list from "../../utils/markupButton/permanantButton/lists.js";
import { editCaption } from "../../services/client.js";
import { sendToCOllection } from "../../utils/sendToCollection.js";
function askAName(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ctx.session.messageIds = [];
                    ctx.session.language = [];
                    ctx.session.done = false;
                    return [4 /*yield*/, ctx.reply("```note\n you can not delete anything \n until the last step from here \n after you can \n cancel anytime say``` /cancel", {
                            parse_mode: "MarkdownV2",
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, ctx.reply("Send the Anime name ")];
                case 2:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
            }
        });
    });
}
function handleANameAskSeason(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 2];
                    ctx.session.title = ctx.message.text;
                    ctx.session.addToCollection = ctx.message.text + " ";
                    return [4 /*yield*/, ctx.reply("Select the Season of this Anime ", keyboard.oneTimeSeasonKeyboard())];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("Add Anime Canceled start again /adda")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 4: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function handleSeasonAskLang(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 5];
                    if (!list.seasonList.flat().includes(ctx.message.text)) return [3 /*break*/, 2];
                    ctx.session.season = ctx.message.text;
                    ctx.session.addToCollection =
                        ctx.session.addToCollection + " S" + ctx.message.text;
                    return [4 /*yield*/, ctx.reply("Enter the language of the Anime:", keyboard.oneTimeLangKeyboard())];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, ctx.reply("Share Anime Canceled start again /adda")];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 7: return [2 /*return*/, _a.sent()];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function handleLangAskQuality(ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 5];
                    if (!list.langList.flat().includes(ctx.message.text)) return [3 /*break*/, 2];
                    ctx.session.language =
                        ctx.session.language || [];
                    (_a = ctx.session.language) === null || _a === void 0 ? void 0 : _a.push(ctx.message.text);
                    ctx.session.addToCollection =
                        ctx.session.addToCollection +
                            " in " +
                            ctx.message.text +
                            " ";
                    return [4 /*yield*/, ctx.reply("Enter the quality of the Anime:", keyboard.oneTimeQualityKeyboard())];
                case 1:
                    _b.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, ctx.reply("Share Anime Canceled start again /adda")];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 7: return [2 /*return*/, _b.sent()];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function handleQualityAskSub(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 5];
                    if (!list.qualityList.flat().includes(ctx.message.text)) return [3 /*break*/, 2];
                    ctx.session.quality = ctx.message.text;
                    return [4 /*yield*/, ctx.reply("Selct the subtitle of the Anime:", keyboard.oneTimeSubKeyboard())];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, ctx.reply("Share Anime Canceled start again /adda")];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 7: return [2 /*return*/, _a.sent()];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function handleSubAskEps(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 2];
                    ctx.session.subtitle = ctx.message.text;
                    ctx.session.addToCollection =
                        ctx.session.addToCollection + ctx.message.text + " Sub Done";
                    return [4 /*yield*/, ctx.reply("Send the total episodes of the anime in numbers")];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("Share Anime Canceled start again /adda")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 4: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function handleEpsAskPoster(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var totalEpisodes, containsOnlyNumbers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 5];
                    totalEpisodes = ctx.message.text;
                    containsOnlyNumbers = /^[0-9.]+$/.test(totalEpisodes);
                    if (!containsOnlyNumbers) return [3 /*break*/, 2];
                    ctx.session.totalEpisodes = ctx.message.text;
                    return [4 /*yield*/, ctx.reply("Send me poster that realated to it (a Image Of Anime) ")];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("```Wrong \n  you can send only numbers\n```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, ctx.scene.leave()];
                case 6: return [2 /*return*/, _a.sent()];
                case 7: return [2 /*return*/];
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
                    return [4 /*yield*/, ctx.reply("Share Anime Canceled start again /adda")];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    if (!(ctx.message && "photo" in ctx.message)) return [3 /*break*/, 5];
                    photoFileId = ctx.message.photo[0].file_id;
                    ctx.session.animePosterID = photoFileId;
                    ctx.session.messageIds =
                        ctx.session.messageIds || [];
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
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var text, _d, title, season, language, quality, totalEpisodes, file, subtitle, messageIds, animePosterID, animeDetails, animeDetailsString, forwardedMessageIds, animeData, shareId, botUsername, link, addToCollection;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text === "/cancel")) return [3 /*break*/, 3];
                    return [4 /*yield*/, ctx.reply("Share Anime Canceled start again /adda")];
                case 1:
                    _e.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 2: return [2 /*return*/, _e.sent()];
                case 3:
                    if (!ctx.message) return [3 /*break*/, 13];
                    text = "text" in ctx.message ? ctx.message.text : "";
                    if (!(text.toLowerCase() === "done" && !ctx.session.done)) return [3 /*break*/, 11];
                    _d = ctx.session, title = _d.title, season = _d.season, language = _d.language, quality = _d.quality, totalEpisodes = _d.totalEpisodes, file = _d.file, subtitle = _d.subtitle, messageIds = _d.messageIds, animePosterID = _d.animePosterID;
                    animeDetails = {
                        title: title,
                        season: season,
                        language: language,
                        quality: quality,
                        totalEpisodes: totalEpisodes,
                        file: file,
                        subtitle: subtitle,
                        messageIds: messageIds,
                        animePosterID: animePosterID,
                    };
                    animeDetailsString = JSON.stringify(animeDetails, null, 2);
                    return [4 /*yield*/, ctx.reply("```Anime details and file received.\n".concat(animeDetailsString, " \uD83C\uDF89```"), {
                            parse_mode: "MarkdownV2",
                        })];
                case 4:
                    _e.sent();
                    ctx.session.done = true;
                    return [4 /*yield*/, telegram.forwardMessages(env.dbAnimeChannelId, (_a = ctx.chat) === null || _a === void 0 ? void 0 : _a.id, animeDetails.messageIds ? animeDetails.messageIds : [])];
                case 5:
                    forwardedMessageIds = _e.sent();
                    animeData = getAnimedata(animeDetails, forwardedMessageIds);
                    return [4 /*yield*/, database.saveAnime(animeData)];
                case 6:
                    shareId = _e.sent();
                    botUsername = ctx.botInfo.username;
                    link = "https://t.me/".concat(botUsername, "?start=").concat(shareId, "-a");
                    return [4 /*yield*/, ctx.reply(link)];
                case 7:
                    _e.sent();
                    addToCollection = ctx.session.addToCollection;
                    return [4 /*yield*/, editCaption(env.dbAnimeChannelId, forwardedMessageIds, env.joinAnime)];
                case 8:
                    _e.sent();
                    return [4 /*yield*/, sendToCOllection(env.collectionAnime, animePosterID, link, "Name: ".concat(title, "\nSeason : ").concat(season, "\nQulity:").concat(quality, "\nTotal Episodes : ").concat(totalEpisodes, "\nAudio : ").concat(language, "\nSubtitle : ").concat(subtitle) ||
                            "none")];
                case 9:
                    _e.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 10: 
                // await sendMessage(env.collectionAnime, addToCollection);
                return [2 /*return*/, _e.sent()];
                case 11: return [4 /*yield*/, ctx.reply("Send next file if Done Click Done ".concat((_b = ctx.session.messageIds) === null || _b === void 0 ? void 0 : _b.length), keyboard.oneTimeDoneKeyboard())];
                case 12:
                    _e.sent();
                    (_c = ctx.session.messageIds) === null || _c === void 0 ? void 0 : _c.push(ctx.message.message_id);
                    _e.label = 13;
                case 13: return [2 /*return*/];
            }
        });
    });
}
export { askAName, done, handleSubAskEps, handleANameAskSeason, handleEpsAskPoster, handleLangAskQuality, handleQualityAskSub, handlePosterAskRelatedMsg, handleSeasonAskLang, };
