import { WizardSessionData } from "telegraf/typings/scenes";
export interface AIOSessionData extends WizardSessionData {
    aIOTitle?: string;
    backupChannel?: string;
    file?: string;
    messageIds?: number[];
    captions?: string[];
    aIOPosterID?: string;
    done?: boolean;
}
