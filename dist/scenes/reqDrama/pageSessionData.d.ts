import { WizardSessionData } from "telegraf/typings/scenes";
import { DramaDocument } from "../../databases/interfaces/drama";
export default interface PageSessionData extends WizardSessionData {
    page?: number;
    prev?: string;
    next?: string;
    dramaData?: DramaDocument[];
}
