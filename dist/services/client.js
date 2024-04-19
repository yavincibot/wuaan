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
import { Api, TelegramClient } from "telegram/index.js";
import { StringSession } from "telegram/sessions/index.js";
import { myVar } from "../myVar.js";
import { processCaption } from "../utils/caption/editCaption.js";
var apiIdBHAIString = process.env.API_ID_ISHVI || "";
var apiHashBHAI = process.env.API_HASH_ISHVI || "";
var sessionBHAI = process.env.SESSION_ISHVI || "";
export var bhai = new TelegramClient(new StringSession(sessionBHAI), parseInt(apiIdBHAIString), apiHashBHAI, { connectionRetries: 5 });
export function editCaption(chat, msgIds, join) {
    return __awaiter(this, void 0, void 0, function () {
        var client, source, _i, msgIds_1, msgId, success, getMsg, oldCap, newCap, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = bhai;
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, client.getInputEntity(parseInt(chat))];
                case 2:
                    source = _a.sent();
                    _i = 0, msgIds_1 = msgIds;
                    _a.label = 3;
                case 3:
                    if (!(_i < msgIds_1.length)) return [3 /*break*/, 10];
                    msgId = msgIds_1[_i];
                    success = false;
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 8, , 9]);
                    return [4 /*yield*/, getMessageFromId(client, chat, msgId)];
                case 5:
                    getMsg = _a.sent();
                    oldCap = getMsg[0].message;
                    newCap = processCaption(oldCap, join);
                    return [4 /*yield*/, client.invoke(new Api.messages.EditMessage({
                            peer: source,
                            id: msgId,
                            message: newCap,
                        }))];
                case 6:
                    _a.sent();
                    success = true;
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    error_1 = _a.sent();
                    success = false;
                    return [3 /*break*/, 9];
                case 9:
                    _i++;
                    return [3 /*break*/, 3];
                case 10: return [2 /*return*/];
            }
        });
    });
}
export function getMessageFromId(client, chat, messageId) {
    return __awaiter(this, void 0, void 0, function () {
        var source, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.getInputEntity(BigInt(chat))];
                case 1:
                    source = _a.sent();
                    return [4 /*yield*/, client.getMessages(source, { ids: [messageId] })];
                case 2:
                    message = _a.sent();
                    console.log(message);
                    return [2 /*return*/, message];
            }
        });
    });
}
export function sendMessage(chat, message) {
    return __awaiter(this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 6]);
                    return [4 /*yield*/, bhai.connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, bhai.sendMessage(chat, { message: message, parseMode: "md" })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, bhai.disconnect()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4:
                    error_2 = _a.sent();
                    console.error("Error sending message with Markdown:", error_2);
                    return [4 /*yield*/, bhai.disconnect()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
export function getAllMessages(chat) {
    return __awaiter(this, void 0, void 0, function () {
        var source, offsetId, messages, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, bhai.connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, bhai.getInputEntity(chat)];
                case 2:
                    source = _a.sent();
                    offsetId = myVar.COPY_FROM;
                    return [4 /*yield*/, bhai.getMessages(source, {
                            limit: 3000,
                            offsetId: offsetId,
                            reverse: true,
                        })];
                case 3:
                    messages = _a.sent();
                    return [4 /*yield*/, bhai.disconnect()];
                case 4:
                    _a.sent();
                    return [2 /*return*/, messages];
                case 5:
                    error_3 = _a.sent();
                    console.error("Error getting all message IDs:", error_3);
                    throw error_3;
                case 6: return [2 /*return*/];
            }
        });
    });
}
// // export async function forwardMessageAsCopy(client: any, chat: any, messages: any) {
// //   try {
// //     await client.connect();
// //     const source = await client.getInputEntity(BigInt(chat));
// //     const batchSize = 50;
// //     for (let i = 0; i < messages.length; i += batchSize) {
// //       const batchMessages = messages.slice(i, i + batchSize);
// //       for (const message of batchMessages) {
// //         console.log(message.id);
// //         if (message.id > myVar.COPY_FROM) {
// //           console.log(message);
// //           if (message.hasOwnProperty("message") && message.message) {
// //             console.log(message.message);
// //             message.entity = null;
// //             let modifiedMessage = message.message.replace(
// //               /(@[\w\d_]+)|(https?:\/\/[\S]+)/g,
// //               function (match: any, p1: any, p2: any) {
// //                 if (p1) {
// //                   return "";
// //                 } else {
// //                   return "";
// //                 }
// //               }
// //             );
// //             message.message = modifiedMessage;
// //             await client.sendMessage(source, { message });
// //             await delay(2000, 10000);
// //           }
// //         }
// //       }
// //       console.log(
// //         `Forwarded ${Math.min(batchSize, messages.length - i)} messages as copy to ${chat}`
// //       );
// //     }
// //     console.log("All messages forwarded as copy!");
// //   } catch (error) {
// //     console.error("Error forwarding messages as copy:", error);
// //     throw error;
// //   }
// // }
// function delay(min: any, max: any) {
//   const delayTime = Math.floor(Math.random() * (max - min + 1) + min);
//   return new Promise((resolve) => setTimeout(resolve, delayTime));
// }
