export interface Link {
    episodeNumber: number;
    shortUrl: string;
    teleUrl: string;
}
export interface DramaDocument {
    shareId: number;
    messageIds: number[];
    dramaName: string;
    dramaPosterID: string;
    year: string;
    season: number;
    totalEpisodes: string;
    language: string[];
    genre: string[];
    synopsis: string;
    quality: string;
    rating: string;
    channel: string;
    subtitle: string;
    episodes: Link[];
}
