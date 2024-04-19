import env from "../services/env.js";
export default {
    private: function (ctx, next) {
        var _a, _b;
        console.log((_a = ctx.chat) === null || _a === void 0 ? void 0 : _a.id);
        if (((_b = ctx.chat) === null || _b === void 0 ? void 0 : _b.id) !== undefined) {
            if (ctx.chat.type === "private" || env.allowGroups.includes(ctx.chat.id)) {
                next();
            }
        }
    },
};
