import getRandomId from "../../extra/getRandomId.js";
export default function getDramadata(dramaDetails, messageIds) {
    var shareId = getRandomId();
    return {
        shareId: shareId,
        messageIds: messageIds ? messageIds : [],
        aIOTitle: dramaDetails.aIOTitle ? dramaDetails.aIOTitle : "",
        aIOPosterID: dramaDetails.aIOPosterID ? dramaDetails.aIOPosterID : "0",
        episodes: [
            { episodeNumber: 1, shortUrl: "DummyLink1", teleUrl: "DummyURL1" },
            { episodeNumber: 2, shortUrl: "DummyLink2", teleUrl: "DummyURL2" },
        ],
    };
}
