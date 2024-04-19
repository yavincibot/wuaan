import getRandomId from "../../extra/getRandomId.js";
export default function getAnimedata(animeDetails, messageIds) {
    var shareId = getRandomId();
    var season = animeDetails.season && !isNaN(parseInt(animeDetails.season))
        ? parseInt(animeDetails.season)
        : 1;
    return {
        shareId: shareId,
        messageIds: messageIds ? messageIds : [],
        animeName: animeDetails.title ? animeDetails.title : "",
        animePosterID: animeDetails.animePosterID ? animeDetails.animePosterID : "0",
        season: season,
        totalEpisodes: animeDetails.totalEpisodes ? animeDetails.totalEpisodes : "",
        language: animeDetails.language ? animeDetails.language : [],
        quality: animeDetails.quality ? animeDetails.quality : "",
        subtitle: animeDetails.subtitle ? animeDetails.subtitle : "",
        episodes: [
            { episodeNumber: 1, shortUrl: "DummyLink1", teleUrl: "DummyURL1" },
            { episodeNumber: 2, shortUrl: "DummyLink2", teleUrl: "DummyURL2" },
        ],
    };
}
