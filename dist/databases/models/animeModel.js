import mongoose, { Schema } from "mongoose";
export var linkSchema = new Schema({
    episodeNumber: {
        type: Number,
        required: true,
    },
    shortUrl: {
        type: String,
        default: "no link",
    },
    teleUrl: {
        type: String,
        required: true,
    },
});
export var animeSchema = new Schema({
    shareId: {
        type: Number,
        required: true,
        unique: true,
    },
    messageIds: {
        type: [Number],
        required: true,
    },
    animeName: {
        type: String,
        required: true,
    },
    animePosterID: {
        type: String,
        required: true,
    },
    season: {
        type: Number,
        default: 1,
    },
    language: {
        type: [String],
        default: ["English"],
    },
    quality: {
        type: String,
        default: "Not rated",
    },
    subtitle: {
        type: String,
        default: "Unknown",
    },
    totalEpisodes: {
        type: String,
        default: "Unknown",
    },
    episodes: [linkSchema],
}, { timestamps: true });
var DramaModel = mongoose.model("anime", animeSchema);
export default DramaModel;
