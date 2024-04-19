import { Api, TelegramClient } from "telegram/index.js";
import { TotalList } from "telegram/Helpers";
export declare const bhai: TelegramClient;
export declare function editCaption(chat: any, msgIds: number[], join: string): Promise<void>;
export declare function getMessageFromId(client: any, chat: any, messageId: any): Promise<any>;
export declare function sendMessage(chat: string, message: any): Promise<void>;
export declare function getAllMessages(chat: number): Promise<TotalList<Api.Message>>;
