import getRandomId from "../../extra/getRandomId.js";
export default function getDramadata(dramaDetails, messageIds) {
    var shareId = getRandomId();
    var season = dramaDetails.season && !isNaN(parseInt(dramaDetails.season))
        ? parseInt(dramaDetails.season)
        : 1;
    return {
        shareId: shareId,
        messageIds: messageIds ? messageIds : [],
        dramaName: dramaDetails.title ? dramaDetails.title : "",
        dramaPosterID: dramaDetails.dramaPosterID ? dramaDetails.dramaPosterID : "0",
        year: dramaDetails.releasingYear ? dramaDetails.releasingYear : "Not Available",
        season: season,
        totalEpisodes: dramaDetails.totalEpisodes ? dramaDetails.totalEpisodes : "",
        language: dramaDetails.language ? dramaDetails.language : [],
        genre: dramaDetails.genres ? dramaDetails.genres : [],
        synopsis: dramaDetails.description ? dramaDetails.description : "",
        quality: dramaDetails.quality ? dramaDetails.quality : "",
        rating: dramaDetails.rating ? dramaDetails.rating : "",
        channel: dramaDetails.backupChannel ? dramaDetails.backupChannel : "",
        subtitle: dramaDetails.subtitle ? dramaDetails.subtitle : "",
        episodes: [
            { episodeNumber: 1, shortUrl: "DummyLink1", teleUrl: "DummyURL1" },
            { episodeNumber: 2, shortUrl: "DummyLink2", teleUrl: "DummyURL2" },
        ],
    };
}
