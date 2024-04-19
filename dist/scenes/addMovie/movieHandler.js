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
import * as list from "../../utils/markupButton/permanantButton/lists.js";
import getMoviedata from "./movieDocument.js";
import { editCaption } from "../../services/client.js";
import { sendToCOllection } from "../../utils/sendToCollection.js";
function askMName(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Session Data:", ctx.session);
                    ctx.session.messageIds = [];
                    ctx.session.language = [];
                    ctx.session.genres = [];
                    ctx.session.synopsis = "done";
                    ctx.session.channel = "";
                    ctx.session.done = false;
                    return [4 /*yield*/, ctx.reply("```note\n you can not delete anything \n until the last step from here \n after you can \n cancel anytime say``` /cancel", {
                            parse_mode: "MarkdownV2",
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, ctx.reply("Send the movie name ")];
                case 2:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
            }
        });
    });
}
function handleMNameAskGenres(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 2];
                    ctx.session.addToCollection = ctx.message.text + " ";
                    ctx.session.movieName = ctx.message.text;
                    return [4 /*yield*/, ctx.reply("Select the genres of this movie ", keyboard.oneTimeGenreKeyboard())];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("Add movie Canceled start again /addm")];
                case 3:
                    _a.sent();
                    return [2 /*return*/, ctx.scene.leave()];
            }
        });
    });
}
function handleGeneresAskYear(ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 7];
                    text = ctx.message.text;
                    if (!(text === "Done")) return [3 /*break*/, 2];
                    return [4 /*yield*/, ctx.reply("Send the releasing year of the movie")];
                case 1:
                    _b.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2:
                    if (!list.genresList.flat().includes(text)) return [3 /*break*/, 4];
                    ctx.session.genres =
                        ctx.session.genres || [];
                    (_a = ctx.session.genres) === null || _a === void 0 ? void 0 : _a.push(text);
                    return [4 /*yield*/, ctx.reply("Select Another Genre If Done Click Done !!!")];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, ctx.reply("```\n Wrong  you can choose only from buttons```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7: return [2 /*return*/, ctx.scene.leave()];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function handleYearAskLang(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 2];
                    ctx.session.year = ctx.message.text;
                    ctx.session.addToCollection =
                        ctx.session.addToCollection + ctx.message.text;
                    return [4 /*yield*/, ctx.reply("Enter the language of the movie:", keyboard.oneTimeLangKeyboard())];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("Share movie Canceled start again /addm")];
                case 3:
                    _a.sent();
                    return [2 /*return*/, ctx.scene.leave()];
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
                    return [4 /*yield*/, ctx.reply("Enter the quality of the movie:", keyboard.oneTimeQualityKeyboard())];
                case 1:
                    _b.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, ctx.reply("Share movie Canceled start again /addm")];
                case 6:
                    _b.sent();
                    return [2 /*return*/, ctx.scene.leave()];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// async function handleDesAskQuality(ctx: movieWizardContext) {
//   if (ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel") {
//     (ctx.session as MovieSessionData).synopsis = ctx.message.text;
//     await ctx.reply("Enter the quality of the movie:", keyboard.oneTimeQualityKeyboard());
//     return ctx.wizard.next();
//   } else {
//     await ctx.reply("Share movie Canceled ! start again /addm");
//     return ctx.scene.leave();
//   }
// }
function handleQualityAskRating(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 5];
                    if (!list.qualityList.flat().includes(ctx.message.text)) return [3 /*break*/, 2];
                    ctx.session.quality = ctx.message.text;
                    return [4 /*yield*/, ctx.reply("Enter the imdb rating of the movie:", keyboard.oneTimeRatingKeyboard())];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, ctx.reply("Share movie Canceled start again /addm")];
                case 6:
                    _a.sent();
                    return [2 /*return*/, ctx.scene.leave()];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function handleRatingAskSub(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 5];
                    if (!list.imdbRatingList.flat().includes(ctx.message.text)) return [3 /*break*/, 2];
                    return [4 /*yield*/, ctx.reply("Select the Subtitle of the movie!", keyboard.oneTimeSubKeyboard())];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("```Wrong\n  you can choose only from buttons\n```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, ctx.reply("Share movie Canceled start again /addm")];
                case 6:
                    _a.sent();
                    return [2 /*return*/, ctx.scene.leave()];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// async function handleChannelAskSub(ctx: movieWizardContext) {
//   if (ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel") {
//     (ctx.session as MovieSessionData).channel = ctx.message.text;
//     await ctx.reply("Select the Subtitle of the movie!", keyboard.oneTimeSubKeyboard());
//     return ctx.wizard.next();
//   } else {
//     await ctx.reply("Share movie Canceled start again /addm");
//     return ctx.scene.leave();
//   }
// }
function handleSubAskPoster(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text !== "/cancel")) return [3 /*break*/, 2];
                    ctx.session.subtitle = ctx.message.text;
                    ctx.session.addToCollection =
                        ctx.session.addToCollection + ctx.message.text + " Sub";
                    return [4 /*yield*/, ctx.reply("Send me poster that realated to it (a Image Of movie) ")];
                case 1:
                    _a.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 2: return [4 /*yield*/, ctx.reply("Share movie Canceled start again /addm")];
                case 3:
                    _a.sent();
                    return [2 /*return*/, ctx.scene.leave()];
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
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text === "/cancel")) return [3 /*break*/, 2];
                    return [4 /*yield*/, ctx.reply("Share movie Canceled start again /addm")];
                case 1:
                    _b.sent();
                    return [2 /*return*/, ctx.scene.leave()];
                case 2:
                    if (!(ctx.message && "photo" in ctx.message)) return [3 /*break*/, 4];
                    photoFileId = ctx.message.photo[0].file_id;
                    ctx.session.moviePosterID = photoFileId;
                    ctx.session.messageIds =
                        ctx.session.messageIds || [];
                    (_a = ctx.session.messageIds) === null || _a === void 0 ? void 0 : _a.push(ctx.message.message_id);
                    return [4 /*yield*/, ctx.reply("Send me files and message that realated to it ")];
                case 3:
                    _b.sent();
                    return [2 /*return*/, ctx.wizard.next()];
                case 4: return [4 /*yield*/, ctx.reply("```Wrong \n  you need to send a image\n```", {
                        parse_mode: "MarkdownV2",
                    })];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function done(ctx) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var text, _d, movieName, genres, year, language, synopsis, rating, channel, subtitle, quality, messageIds, moviePosterID, movieDetails, movieDetailsString, forwardedMessageIds, movieData, shareId, botUsername, link;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!(ctx.message && "text" in ctx.message && ctx.message.text === "/cancel")) return [3 /*break*/, 3];
                    return [4 /*yield*/, ctx.reply("Share movie Canceled start again /addm")];
                case 1:
                    _e.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 2: return [2 /*return*/, _e.sent()];
                case 3:
                    if (!ctx.message) return [3 /*break*/, 14];
                    text = "text" in ctx.message ? ctx.message.text : "";
                    if (!(text.toLowerCase() === "done" && !ctx.session.done)) return [3 /*break*/, 12];
                    _d = ctx.session, movieName = _d.movieName, genres = _d.genres, year = _d.year, language = _d.language, synopsis = _d.synopsis, rating = _d.rating, channel = _d.channel, subtitle = _d.subtitle, quality = _d.quality, messageIds = _d.messageIds, moviePosterID = _d.moviePosterID;
                    movieDetails = {
                        movieName: movieName,
                        genres: genres,
                        year: year,
                        language: language,
                        synopsis: synopsis,
                        rating: rating,
                        channel: channel,
                        quality: quality,
                        subtitle: subtitle,
                        messageIds: messageIds,
                        moviePosterID: moviePosterID,
                    };
                    movieDetailsString = JSON.stringify(movieDetails, null, 2);
                    return [4 /*yield*/, ctx.reply("```movie details and file received.\n".concat(movieDetailsString, " \uD83C\uDF89```"), {
                            parse_mode: "MarkdownV2",
                        })];
                case 4:
                    _e.sent();
                    return [4 /*yield*/, ctx.reply("wait generating link")];
                case 5:
                    _e.sent();
                    return [4 /*yield*/, telegram.forwardMessages(env.dbMovieChannelId, (_a = ctx.chat) === null || _a === void 0 ? void 0 : _a.id, movieDetails.messageIds ? movieDetails.messageIds : [])];
                case 6:
                    forwardedMessageIds = _e.sent();
                    ctx.session.done = true;
                    movieData = getMoviedata(movieDetails, forwardedMessageIds);
                    return [4 /*yield*/, database.saveMovie(movieData)];
                case 7:
                    shareId = _e.sent();
                    botUsername = ctx.botInfo.username;
                    link = "https://t.me/".concat(botUsername, "?start=").concat(shareId, "-m");
                    return [4 /*yield*/, ctx.reply(link)];
                case 8:
                    _e.sent();
                    // const addToCollection = (ctx.session as MovieSessionData).addToCollection;
                    return [4 /*yield*/, editCaption(env.dbMovieChannelId, forwardedMessageIds, env.join)];
                case 9:
                    // const addToCollection = (ctx.session as MovieSessionData).addToCollection;
                    _e.sent();
                    return [4 /*yield*/, sendToCOllection(env.collectionMovie, moviePosterID, link, "Name: ".concat(movieName, "\nYear:").concat(year, "Qulity:").concat(quality, "\nAudio ").concat(language, "\nSubtitle:").concat(subtitle, "Genres:").concat(genres === null || genres === void 0 ? void 0 : genres.join(", ")) || "none")];
                case 10:
                    _e.sent();
                    return [4 /*yield*/, ctx.scene.leave()];
                case 11: return [2 /*return*/, _e.sent()];
                case 12: return [4 /*yield*/, ctx.reply("Send next file if Done Click Done ".concat((_b = ctx.session.messageIds) === null || _b === void 0 ? void 0 : _b.length), keyboard.oneTimeDoneKeyboard())];
                case 13:
                    _e.sent();
                    (_c = ctx.session.messageIds) === null || _c === void 0 ? void 0 : _c.push(ctx.message.message_id);
                    _e.label = 14;
                case 14: return [2 /*return*/];
            }
        });
    });
}
export { askMName, done, handleYearAskLang, handleSubAskPoster, 
// handleChannelAskSub,
// handleDesAskQuality,
handleMNameAskGenres, handleGeneresAskYear, handleLangAskQuality, handlePosterAskRelatedMsg, handleQualityAskRating, handleRatingAskSub, };
