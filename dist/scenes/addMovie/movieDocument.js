import getRandomId from "../../extra/getRandomId.js";
export default function getMoviedata(movieDetails, messageIds) {
    var shareId = getRandomId();
    return {
        shareId: shareId,
        messageIds: messageIds ? messageIds : [],
        movieName: movieDetails.movieName ? movieDetails.movieName : "",
        moviePosterID: movieDetails.moviePosterID ? movieDetails.moviePosterID : "0",
        year: movieDetails.year ? movieDetails.year : "Not Available",
        language: movieDetails.language ? movieDetails.language : [],
        genres: movieDetails.genres ? movieDetails.genres : [],
        synopsis: movieDetails.synopsis ? movieDetails.synopsis : "",
        quality: movieDetails.quality ? movieDetails.quality : "",
        rating: movieDetails.rating ? movieDetails.rating : "",
        channel: movieDetails.channel ? movieDetails.channel : "",
        subtitle: movieDetails.subtitle ? movieDetails.subtitle : "",
        links: { shortUrl: "DummyLink1", teleUrl: "DummyURL1" },
    };
}
