export interface Link {
    episodeNumber: number;
    shortUrl: string;
    teleUrl: string;
}
export interface AnimeDocument {
    shareId: number;
    messageIds: number[];
    animeName: string;
    animePosterID: string;
    season: number;
    totalEpisodes: string;
    language: string[];
    quality: string;
    subtitle: string;
    episodes: Link[];
}
