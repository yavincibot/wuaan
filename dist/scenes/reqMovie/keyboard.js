import env from "../../services/env.js";
var makeButtons = function (link, next, prev) {
    return {
        inline_keyboard: [
            [
                { text: "⬅️ Prev", callback_data: prev },
                { text: "Get This", url: link },
                { text: "Next ➡️", callback_data: next },
            ],
            [
                { text: "❣️❣️ Join K Drama Love ❣️❣️", url: "https://t.me/".concat(env.join) },
            ],
        ],
    };
};
export { makeButtons };
