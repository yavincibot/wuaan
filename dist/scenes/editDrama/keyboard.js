import env from "../../services/env.js";
var makeButtons = function (link, next, prev) {
    return {
        inline_keyboard: [
            [
                { text: "⬅️ Prev", callback_data: prev },
                { text: "Get This", url: link },
                { text: "Next ➡️", callback_data: next },
            ],
            [{ text: "❣️❣️ Join K Drama Love ❣️❣️", url: "https://t.me/".concat(env.join) }],
        ],
    };
};
var makeAdminButtons = function (link, next, prev) {
    return {
        inline_keyboard: [
            [
                { text: "⬅️ Prev", callback_data: prev },
                { text: "Get This", url: link },
                { text: "Next ➡️", callback_data: next },
            ],
            [
                { text: "Delete This", callback_data: "delete" },
                { text: "Edit This", callback_data: "edit" },
            ],
        ],
    };
};
var editDramaButtons = function () {
    return {
        inline_keyboard: [
            [
                { text: "Edit Drama Name", callback_data: "name" },
                { text: "Edit Drama Year", callback_data: "year" },
            ],
            [
                { text: "Edit Drama Season", callback_data: "season" },
                { text: "Edit Drama quality", callback_data: "quality" },
            ],
            [
                { text: "Edit Drama Total Eps", callback_data: "totaleps" },
                { text: "Edit Drama language", callback_data: "language" },
            ],
            [
                { text: "Edit Drama Subtitle", callback_data: "subtitle" },
                { text: "Edit Drama Rating", callback_data: "rating" },
            ],
            [
                { text: "Edit Drama Poster", callback_data: "poster" },
                { text: "Edit Drama Synopsis", callback_data: "synopsis" },
            ],
            [{ text: "Add Next Episodes Of this Drama", callback_data: "add" }],
        ],
    };
};
var editMovieButton = function () {
    return {
        inline_keyboard: [
            [
                { text: "Edit Movie Name", callback_data: "name" },
                { text: "Edit Movie Year", callback_data: "year" },
            ],
            [
                { text: "Edit Drama quality", callback_data: "quality" },
                { text: "Edit Drama language", callback_data: "language" },
            ],
            [
                { text: "Edit Drama Subtitle", callback_data: "subtitle" },
                { text: "Edit Drama Rating", callback_data: "rating" },
            ],
            [
                { text: "Edit Drama Poster", callback_data: "poster" },
                { text: "Edit Drama Synopsis", callback_data: "synopsis" },
            ],
            [{ text: "Add Next Episodes Of this Drama", callback_data: "add" }],
        ],
    };
};
export { makeButtons, makeAdminButtons, editDramaButtons, editMovieButton };
