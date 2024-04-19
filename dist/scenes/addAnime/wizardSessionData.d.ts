import { WizardSessionData } from "telegraf/typings/scenes";
export interface AnimeSessionData extends WizardSessionData {
    title?: string;
    season?: string;
    language?: string[];
    quality?: string;
    subtitle?: string;
    totalEpisodes?: string;
    file?: string;
    messageIds?: number[];
    animePosterID?: string;
    done?: boolean;
    addToCollection?: string;
}
