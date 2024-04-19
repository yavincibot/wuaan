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
export var dramaSchema = new Schema({
    shareId: {
        type: Number,
        required: true,
        unique: true,
    },
    messageIds: {
        type: [Number],
        required: true,
    },
    dramaName: {
        type: String,
        required: true,
    },
    dramaPosterID: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        default: "Not Known",
    },
    season: {
        type: Number,
        default: 1,
    },
    language: {
        type: [String],
        default: ["English"],
    },
    genre: {
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
    totalEpisodes: {
        type: String,
        default: "Unknown",
    },
    episodes: [linkSchema],
}, { timestamps: true });
var DramaModel = mongoose.model("drama", dramaSchema);
export default DramaModel;
