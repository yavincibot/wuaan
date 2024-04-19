import { WizardSessionData } from "telegraf/typings/scenes";
export interface MovieSessionData extends WizardSessionData {
    messageIds?: number[];
    movieName?: string;
    moviePosterID?: string;
    year?: string;
    language?: string[];
    genres?: string[];
    quality?: string;
    synopsis?: string;
    rating?: string;
    channel?: string;
    subtitle?: string;
    addToCollection?: string;
    done?: boolean;
}
