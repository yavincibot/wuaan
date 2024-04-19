/// <reference types="node" />
import { Scenes, Telegraf } from "telegraf";
import { User } from "telegraf/typings/core/types/typegram.js";
declare class Telegram {
    app: Telegraf<Scenes.WizardContext>;
    messages: Map<number, number[]>;
    waitingMessageId: number;
    waitingMessageTimeout: NodeJS.Timeout;
    firstWaitingMessage: boolean;
    inviteLinks: Map<number, string>;
    constructor();
    initialize(): Promise<void>;
    sendWaitingMessage(chatId: number): Promise<void>;
    deleteWaitingMessage(chatId: number): Promise<void>;
    sendForceJoinMessage(shareId: number, chatId: number, user: User, chatsUserHasNotJoined: number[]): Promise<void>;
    getForceChatButtons(shareId: number, chatsUserHasNotJoined: number[]): Promise<{
        inline_keyboard: (import("@telegraf/types/markup.js").InlineKeyboardButton.UrlButton & {
            hide: boolean;
        })[][];
    }>;
    addMessage(chatId: number, messageId: number): void;
    clearMessages(chatId: number): void;
    forwardMessages(toChatId: number, fromChatId: number, messageIds: number[]): Promise<number[]>;
    getChatsUserHasNotJoined(userId: number): Promise<number[]>;
    alreadyJoinChat(chatId: number, userId: number): Promise<boolean>;
    getInviteLink(chatId: number): Promise<string>;
}
declare const telegram: Telegram;
export default telegram;
