export interface Link {
    shortUrl: string;
    teleUrl: string;
}
export interface MovieDocument {
    shareId: number;
    messageIds: number[];
    movieName: string;
    moviePosterID: string;
    year: string;
    language: string[];
    genres: string[];
    quality: string;
    synopsis: string;
    rating: string;
    channel: string;
    subtitle: string;
    links: Link;
}
