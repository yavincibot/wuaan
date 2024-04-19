import { DramaDocument } from "../../databases/interfaces/drama.js";
interface DramaDetails {
    title?: string;
    genres?: string[];
    releasingYear?: string;
    season?: string;
    language?: string[];
    quality?: string;
    description?: string;
    rating?: string;
    backupChannel?: string;
    subtitle?: string;
    totalEpisodes?: string;
    file?: string;
    messageIds?: number[];
    dramaPosterID?: string;
}
export default function getDramadata(dramaDetails: DramaDetails, messageIds: number[]): DramaDocument;
export {};
