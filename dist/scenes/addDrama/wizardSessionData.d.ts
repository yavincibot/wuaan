import { WizardSessionData } from "telegraf/typings/scenes";
export interface DramaSessionData extends WizardSessionData {
    title?: string;
    genres?: string[];
    releasingYear?: string;
    season?: string;
    language?: string[];
    description?: string;
    rating?: string;
    quality?: string;
    backupChannel?: string;
    subtitle?: string;
    totalEpisodes?: string;
    file?: string;
    messageIds?: number[];
    dramaPosterID?: string;
    done?: boolean;
    addToCollection?: string;
}
