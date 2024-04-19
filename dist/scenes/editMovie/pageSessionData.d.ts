import { WizardSessionData } from "telegraf/typings/scenes";
import { MovieDocument } from "../../databases/interfaces/movie";
export default interface PageSessionData extends WizardSessionData {
    page?: number;
    prev?: string;
    next?: string;
    movieData?: MovieDocument[];
    editDelete?: string;
    tracker?: string;
    messageIds?: number[];
    genres?: string[];
    done?: boolean;
    selectedShareId?: number;
}
