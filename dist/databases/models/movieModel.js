import mongoose, { Schema } from "mongoose";
// Movie Schema
export var movieSchema = new Schema({
    shareId: {
        type: Number,
        required: true,
        unique: true,
    },
    messageIds: {
        type: [Number],
        required: true,
    },
    movieName: {
        type: String,
        required: true,
    },
    moviePosterID: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        default: "Not Known",
    },
    language: {
        type: [String],
        default: ["English"],
    },
    genres: {
        type: [String],
        default: ["Drama"],
    },
    synopsis: {
        type: String,
        default: "No synopsis available",
    },
    rating: {
        type: String,
        default: "Not rated",
    },
    quality: {
        type: String,
        default: "Not rated",
    },
    channel: {
        type: String,
        default: "Unknown",
    },
    subtitle: {
        type: String,
        default: "Unknown",
    },
    links: {
        shortUrl: {
            type: String,
            default: "no link",
        },
        teleUrl: {
            type: String,
            required: true,
        },
    },
}, { timestamps: true });
// Movie Model
var MovieModel = mongoose.model("movie", movieSchema);
export default MovieModel;
