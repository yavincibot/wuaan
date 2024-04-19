import env from "../../services/env.js";
var makeButtons = function (link, next, prev) {
    return {
        inline_keyboard: [
            [
                { text: "⬅️ Prev", callback_data: prev },
                { text: "Get This", url: link },
                { text: "Next ➡️", callback_data: next },
            ],
            [{ text: "❣️❣️ Join K anime Love ❣️❣️", url: "https://t.me/".concat(env.join) }],
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
var editAnimeButtons = function () {
    return {
        inline_keyboard: [
            [
                { text: "Edit anime Name", callback_data: "name" },
                { text: "Edit anime Year", callback_data: "year" },
            ],
            [
                { text: "Edit anime Season", callback_data: "season" },
                { text: "Edit anime quality", callback_data: "quality" },
            ],
            [
                { text: "Edit anime Total Eps", callback_data: "totaleps" },
                { text: "Edit anime language", callback_data: "language" },
            ],
            [
                { text: "Edit anime Subtitle", callback_data: "subtitle" },
                { text: "Edit anime Rating", callback_data: "rating" },
            ],
            [
                { text: "Edit anime Poster", callback_data: "poster" },
                { text: "Edit anime Synopsis", callback_data: "synopsis" },
            ],
            [{ text: "Add Next Episodes Of this anime", callback_data: "add" }],
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
                { text: "Edit anime quality", callback_data: "quality" },
                { text: "Edit anime language", callback_data: "language" },
            ],
            [
                { text: "Edit anime Subtitle", callback_data: "subtitle" },
                { text: "Edit anime Rating", callback_data: "rating" },
            ],
            [
                { text: "Edit anime Poster", callback_data: "poster" },
                { text: "Edit anime Synopsis", callback_data: "synopsis" },
            ],
            [{ text: "Add Next Episodes Of this anime", callback_data: "add" }],
        ],
    };
};
export { makeButtons, makeAdminButtons, editAnimeButtons, editMovieButton };
