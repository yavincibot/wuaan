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
import { Scenes, Composer } from "telegraf";
import database from "../../services/database.js";
import env from "../../services/env.js";
import { makeMovieCaption } from "../../utils/caption/makeCaption.js";
import getRandomId from "../../extra/getRandomId.js";
import { sendCallbackQueryResponse } from "./answerCbQUery.js";
import telegram from "../../services/telegram.js";
import * as list from "../../utils/markupButton/permanantButton/lists.js";
import * as keyboard from "../../utils/markupButton/permanantButton/keyboard.js";
import { editCaption } from "../../services/client.js";
// Create a Wizard Scene
var paginationWizard = new Scenes.WizardScene("editMovie", Composer.on("message", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var request, searchCriteria, finalResult, random, photo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!("text" in ctx.message)) return [3 /*break*/, 6];
                ctx.session.done = false;
                ctx.session.messageIds = [];
                ctx.session.page = 0;
                request = ctx.message.text.replace("/editM", "").trim();
                searchCriteria = {
                    movieName: request,
                    quality: undefined,
                    year: undefined,
                    language: undefined,
                };
                return [4 /*yield*/, database.searchMovie(searchCriteria)];
            case 1:
                finalResult = _a.sent();
                random = getRandomId();
                ctx.session.prev = "prev".concat(random);
                ctx.session.next = "next".concat(random);
                console.log(ctx.session.prev);
                ctx.session.movieData = finalResult;
                if (!(finalResult && finalResult.length > 0)) return [3 /*break*/, 3];
                photo = finalResult[0].moviePosterID;
                return [4 /*yield*/, ctx.replyWithPhoto(photo, {
                        caption: "```\n".concat(makeMovieCaption(finalResult[0]), "\n```"),
                        reply_markup: keyboard.makeAdminButtons("https://t.me/".concat(env.botUserName, "?start=").concat(finalResult[0].shareId, "-m"), ctx.session.next || "", ctx.session.prev || ""),
                        parse_mode: "MarkdownV2",
                        reply_to_message_id: ctx.message.message_id,
                    })];
            case 2:
                _a.sent();
                if (finalResult.length > 1) {
                    return [2 /*return*/, ctx.wizard.next()];
                }
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, ctx.reply("".concat(ctx.from.first_name, " your ").concat(request, " not found "))];
            case 4:
                _a.sent();
                ctx.scene.leave;
                _a.label = 5;
            case 5: return [2 /*return*/, ctx.wizard.next()];
            case 6: return [2 /*return*/];
        }
    });
}); }), Composer.on("callback_query", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var page, movieData, photo, photo;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!("data" in ctx.callbackQuery &&
                    (ctx.session.next === ctx.callbackQuery.data ||
                        ctx.session.prev === ctx.callbackQuery.data ||
                        ctx.callbackQuery.data === "edit" ||
                        ctx.callbackQuery.data === "delete"))) return [3 /*break*/, 20];
                page = ctx.session.page || 0;
                movieData = ctx.session.movieData;
                console.log([
                    ctx.session.page || 0,
                    (_a = ctx.session.movieData) === null || _a === void 0 ? void 0 : _a.length,
                ]);
                if (!movieData) return [3 /*break*/, 17];
                if (!ctx.callbackQuery.data.startsWith("next")) return [3 /*break*/, 6];
                if (!(page + 1 < movieData.length)) return [3 /*break*/, 3];
                ctx.session.page =
                    ((_b = ctx.session.page) !== null && _b !== void 0 ? _b : 0) + 1;
                console.log(page, movieData.length);
                photo = movieData[ctx.session.page || 0].moviePosterID;
                //edit
                return [4 /*yield*/, ctx.editMessageMedia({
                        type: "photo",
                        media: photo,
                    })];
            case 1:
                //edit
                _d.sent();
                return [4 /*yield*/, ctx.editMessageCaption("```\n".concat(makeMovieCaption(movieData[page + 1]), "\n```"), {
                        reply_markup: keyboard.makeButtons("https://t.me/".concat(env.botUserName, "?start=").concat(movieData[page + 1].shareId, "-m"), ctx.session.next || "", ctx.session.prev || ""),
                        parse_mode: "MarkdownV2",
                    })];
            case 2:
                _d.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, sendCallbackQueryResponse(ctx, "This is the last no more there !! ")];
            case 4:
                _d.sent();
                _d.label = 5;
            case 5: return [3 /*break*/, 16];
            case 6:
                if (!ctx.callbackQuery.data.startsWith("prev")) return [3 /*break*/, 12];
                if (!(movieData && page != 0)) return [3 /*break*/, 9];
                //ignore this page != 0
                ctx.session.page = Math.max(((_c = ctx.session.page) !== null && _c !== void 0 ? _c : 0) - 1, 0);
                photo = movieData[page - 1].moviePosterID;
                return [4 /*yield*/, ctx.editMessageMedia({
                        type: "photo",
                        media: photo,
                    })];
            case 7:
                _d.sent();
                return [4 /*yield*/, ctx.editMessageCaption("```\n ".concat(makeMovieCaption(movieData[page - 1]), "\n```"), {
                        reply_markup: keyboard.makeButtons("https://t.me/".concat(env.botUserName, "?start=").concat(movieData[page].shareId, "-m"), ctx.session.next || "", ctx.session.prev || ""),
                        parse_mode: "MarkdownV2",
                    })];
            case 8:
                _d.sent();
                return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, sendCallbackQueryResponse(ctx, "Nothing in Prev !! ")];
            case 10:
                _d.sent();
                _d.label = 11;
            case 11: return [3 /*break*/, 16];
            case 12:
                if (!ctx.callbackQuery.data.startsWith("delete")) return [3 /*break*/, 14];
                ctx.session.editDelete = "delete";
                return [4 /*yield*/, ctx.reply("are you sure you want to delete this", {
                        reply_markup: {
                            inline_keyboard: [[{ text: "yes delete", callback_data: "delete" }]],
                        },
                    })];
            case 13:
                _d.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 14:
                if (!ctx.callbackQuery.data.startsWith("edit")) return [3 /*break*/, 16];
                ctx.session.editDelete = "edit";
                return [4 /*yield*/, ctx.reply("What you want to edit in this Movie", {
                        reply_markup: keyboard.editMovieButton(),
                    })];
            case 15:
                _d.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 16: return [3 /*break*/, 19];
            case 17: return [4 /*yield*/, sendCallbackQueryResponse(ctx, "No more data there !!!")];
            case 18:
                _d.sent();
                _d.label = 19;
            case 19: return [3 /*break*/, 22];
            case 20: return [4 /*yield*/, sendCallbackQueryResponse(ctx, "you need to search again this movie !!!")];
            case 21:
                _d.sent();
                _d.label = 22;
            case 22: return [2 /*return*/];
        }
    });
}); }), Composer.on("callback_query", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var selectedShareId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                selectedShareId = ctx.session.selectedShareId || 0;
                if (!("data" in ctx.callbackQuery)) return [3 /*break*/, 27];
                if (!ctx.callbackQuery.data.startsWith("name")) return [3 /*break*/, 2];
                ctx.session.tracker = "name";
                return [4 /*yield*/, ctx.reply("enter the name Movie ")];
            case 1:
                _a.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 2:
                if (!ctx.callbackQuery.data.startsWith("year")) return [3 /*break*/, 4];
                ctx.session.tracker = "year";
                return [4 /*yield*/, ctx.reply("enter year of this Movie")];
            case 3:
                _a.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 4:
                if (!ctx.callbackQuery.data.startsWith("quality")) return [3 /*break*/, 6];
                ctx.session.tracker = "quality";
                return [4 /*yield*/, ctx.reply("enter quality of this Movie", keyboard.oneTimeQualityKeyboard())];
            case 5:
                _a.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 6:
                if (!ctx.callbackQuery.data.startsWith("language")) return [3 /*break*/, 8];
                ctx.session.tracker = "language";
                return [4 /*yield*/, ctx.reply("enter the language of this Movie", keyboard.oneTimeLangKeyboard())];
            case 7:
                _a.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 8:
                if (!ctx.callbackQuery.data.startsWith("subtitle")) return [3 /*break*/, 10];
                ctx.session.tracker = "subtitle";
                return [4 /*yield*/, ctx.reply("enter the subtitle of this Movie", keyboard.oneTimeSubKeyboard())];
            case 9:
                _a.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 10:
                if (!ctx.callbackQuery.data.startsWith("rating")) return [3 /*break*/, 12];
                ctx.session.tracker = "rating";
                return [4 /*yield*/, ctx.reply("enter the rating of this Movie", keyboard.oneTimeRatingKeyboard())];
            case 11:
                _a.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 12:
                if (!ctx.callbackQuery.data.startsWith("poster")) return [3 /*break*/, 14];
                ctx.session.tracker = "poster";
                return [4 /*yield*/, ctx.reply("Send a poster of this Movie")];
            case 13:
                _a.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 14:
                if (!ctx.callbackQuery.data.startsWith("synopsis")) return [3 /*break*/, 16];
                ctx.session.tracker = "synopsis";
                return [4 /*yield*/, ctx.reply("Send the synopsis of this Movie")];
            case 15:
                _a.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 16:
                if (!ctx.callbackQuery.data.startsWith("genres")) return [3 /*break*/, 19];
                ctx.session.tracker = "genres";
                return [4 /*yield*/, ctx.reply("can not update for now")];
            case 17:
                _a.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 18: 
            // return ctx.wizard.next();
            return [2 /*return*/, _a.sent()];
            case 19:
                if (!ctx.callbackQuery.data.startsWith("add")) return [3 /*break*/, 21];
                ctx.session.tracker = "add";
                return [4 /*yield*/, ctx.reply("send me file that you want to add")];
            case 20:
                _a.sent();
                return [2 /*return*/, ctx.wizard.next()];
            case 21:
                if (!ctx.callbackQuery.data.startsWith("delete")) return [3 /*break*/, 27];
                return [4 /*yield*/, ctx.editMessageText("deleting ...")];
            case 22:
                _a.sent();
                return [4 /*yield*/, database.deleteMovie(selectedShareId)];
            case 23:
                _a.sent();
                return [4 /*yield*/, ctx.editMessageText("deleted successfully")];
            case 24:
                _a.sent();
                return [4 /*yield*/, ctx.editMessageReplyMarkup({
                        inline_keyboard: [[{ text: "deleted", callback_data: "delete" }]],
                    })];
            case 25:
                _a.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 26: return [2 /*return*/, _a.sent()];
            case 27: return [2 /*return*/];
        }
    });
}); }), Composer.on("message", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var selectedShareId, tracker, text, photoFileId, text, messageIds, forwardedMessageIds;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                selectedShareId = ctx.session.selectedShareId || 0;
                tracker = ctx.session.tracker || "";
                if (!(tracker.startsWith("name") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 4];
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId, {
                        movieName: ctx.message.text,
                    })];
            case 1:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 2:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 3: return [2 /*return*/, _e.sent()];
            case 4:
                if (!(tracker.startsWith("genres") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 17];
                if (!(ctx.message.text !== "/cancel")) return [3 /*break*/, 13];
                text = ctx.message.text;
                if (!(text === "Done")) return [3 /*break*/, 8];
                return [4 /*yield*/, database.updateDramaAttribute(selectedShareId || 0, {
                        genres: ctx.session.genres,
                    })];
            case 5:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 6:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 7: return [2 /*return*/, _e.sent()];
            case 8:
                if (!list.genresList.flat().includes(text)) return [3 /*break*/, 10];
                ctx.session.genres =
                    ctx.session.genres || [];
                (_a = ctx.session.genres) === null || _a === void 0 ? void 0 : _a.push(text);
                return [4 /*yield*/, ctx.reply("Select Another Genre If Done Click Done !!!")];
            case 9:
                _e.sent();
                return [3 /*break*/, 12];
            case 10: return [4 /*yield*/, ctx.reply("```\n Wrong  you can choose only from buttons```", {
                    parse_mode: "MarkdownV2",
                })];
            case 11:
                _e.sent();
                _e.label = 12;
            case 12: return [3 /*break*/, 16];
            case 13: return [4 /*yield*/, ctx.reply("Add Drama Canceled start again /editM")];
            case 14:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 15: return [2 /*return*/, _e.sent()];
            case 16: return [3 /*break*/, 83];
            case 17:
                if (!(tracker.startsWith("year") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 21];
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId || 0, {
                        year: ctx.message.text,
                    })];
            case 18:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 19:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 20: return [2 /*return*/, _e.sent()];
            case 21:
                if (!(tracker.startsWith("season") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 28];
                if (!list.seasonList.flat().includes(ctx.message.text)) return [3 /*break*/, 25];
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId, {
                        season: ctx.message.text,
                    })];
            case 22:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 23:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 24: return [2 /*return*/, _e.sent()];
            case 25: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                    parse_mode: "MarkdownV2",
                })];
            case 26:
                _e.sent();
                _e.label = 27;
            case 27: return [3 /*break*/, 83];
            case 28:
                if (!(tracker.startsWith("quality") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 35];
                if (!list.qualityList.flat().includes(ctx.message.text)) return [3 /*break*/, 32];
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId, {
                        quality: ctx.message.text,
                    })];
            case 29:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 30:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 31: return [2 /*return*/, _e.sent()];
            case 32: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                    parse_mode: "MarkdownV2",
                })];
            case 33:
                _e.sent();
                _e.label = 34;
            case 34: return [3 /*break*/, 83];
            case 35:
                if (!(tracker.startsWith("totaleps") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 39];
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId, {
                        totalEpisodes: ctx.message.text,
                    })];
            case 36:
                _e.sent();
                return [4 /*yield*/, ctx.reply("enter total episode of this Movie")];
            case 37:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 38: return [2 /*return*/, _e.sent()];
            case 39:
                if (!(tracker.startsWith("language") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 46];
                if (!list.langList.flat().includes(ctx.message.text)) return [3 /*break*/, 43];
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId, {
                        language: ctx.message.text,
                    })];
            case 40:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 41:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 42: return [2 /*return*/, _e.sent()];
            case 43: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                    parse_mode: "MarkdownV2",
                })];
            case 44:
                _e.sent();
                _e.label = 45;
            case 45: return [3 /*break*/, 83];
            case 46:
                if (!(tracker.startsWith("subtitle") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 53];
                if (!list.qualityList.flat().includes(ctx.message.text)) return [3 /*break*/, 50];
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId, {
                        subtitle: ctx.message.text,
                    })];
            case 47:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 48:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 49: return [2 /*return*/, _e.sent()];
            case 50: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                    parse_mode: "MarkdownV2",
                })];
            case 51:
                _e.sent();
                _e.label = 52;
            case 52: return [3 /*break*/, 83];
            case 53:
                if (!(tracker.startsWith("rating") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 60];
                if (!list.imdbRatingList.flat().includes(ctx.message.text)) return [3 /*break*/, 57];
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId, {
                        rating: ctx.message.text,
                    })];
            case 54:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 55:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 56: return [2 /*return*/, _e.sent()];
            case 57: return [4 /*yield*/, ctx.reply("```Wrong \n  you can choose only from buttons\n```", {
                    parse_mode: "MarkdownV2",
                })];
            case 58:
                _e.sent();
                _e.label = 59;
            case 59: return [3 /*break*/, 83];
            case 60:
                if (!(tracker.startsWith("synopsis") && ctx.message && "text" in ctx.message)) return [3 /*break*/, 64];
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId, {
                        synopsis: ctx.message.text,
                    })];
            case 61:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 62:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 63: return [2 /*return*/, _e.sent()];
            case 64:
                if (!(tracker.startsWith("poster") && ctx.message && "photo" in ctx.message)) return [3 /*break*/, 69];
                if (!(ctx.message && "photo" in ctx.message)) return [3 /*break*/, 67];
                photoFileId = ctx.message.photo[0].file_id;
                return [4 /*yield*/, database.updateMovieAttribute(selectedShareId, {
                        moviePosterID: photoFileId,
                    })];
            case 65:
                _e.sent();
                return [4 /*yield*/, ctx.reply("edited")];
            case 66:
                _e.sent();
                _e.label = 67;
            case 67: return [4 /*yield*/, ctx.scene.leave()];
            case 68: return [2 /*return*/, _e.sent()];
            case 69:
                if (!tracker.startsWith("add")) return [3 /*break*/, 81];
                if (!(ctx.message && "text" in ctx.message && ctx.message.text === "/cancel")) return [3 /*break*/, 72];
                return [4 /*yield*/, ctx.reply("Share Movie Canceled start again /editM")];
            case 70:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 71: return [2 /*return*/, _e.sent()];
            case 72:
                if (!ctx.message) return [3 /*break*/, 80];
                text = "text" in ctx.message ? ctx.message.text : "";
                if (!(text.toLowerCase() === "done" && !ctx.session.done)) return [3 /*break*/, 78];
                messageIds = ctx.session.messageIds;
                return [4 /*yield*/, ctx.reply("```Movie details and file received.\n \uD83C\uDF89```", {
                        parse_mode: "MarkdownV2",
                    })];
            case 73:
                _e.sent();
                ctx.session.done = true;
                return [4 /*yield*/, telegram.forwardMessages(env.dbMovieChannelId, (_b = ctx.chat) === null || _b === void 0 ? void 0 : _b.id, messageIds ? messageIds : [])];
            case 74:
                forwardedMessageIds = _e.sent();
                return [4 /*yield*/, database.addMovie(selectedShareId, forwardedMessageIds)];
            case 75:
                _e.sent();
                return [4 /*yield*/, editCaption(env.dbMovieChannelId, forwardedMessageIds, env.join)];
            case 76:
                _e.sent();
                return [4 /*yield*/, ctx.scene.leave()];
            case 77: return [2 /*return*/, _e.sent()];
            case 78: return [4 /*yield*/, ctx.reply("Send next file if Done Click Done ".concat((_c = ctx.session.messageIds) === null || _c === void 0 ? void 0 : _c.length), keyboard.oneTimeDoneKeyboard())];
            case 79:
                _e.sent();
                (_d = ctx.session.messageIds) === null || _d === void 0 ? void 0 : _d.push(ctx.message.message_id);
                _e.label = 80;
            case 80: return [3 /*break*/, 83];
            case 81:
                ctx.reply("somthing went wrong try again");
                return [4 /*yield*/, ctx.scene.leave()];
            case 82: return [2 /*return*/, _e.sent()];
            case 83: return [2 /*return*/];
        }
    });
}); }));
export default paginationWizard;
