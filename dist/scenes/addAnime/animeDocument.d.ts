import { AnimeDocument } from "../../databases/interfaces/anime.js";
interface animeDetails {
    title?: string;
    releasingYear?: string;
    season?: string;
    language?: string[];
    quality?: string;
    subtitle?: string;
    totalEpisodes?: string;
    file?: string;
    messageIds?: number[];
    animePosterID?: string;
}
export default function getAnimedata(animeDetails: animeDetails, messageIds: number[]): AnimeDocument;
export {};
