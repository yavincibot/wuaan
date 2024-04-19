declare const makeButtons: (link: string, next: string, prev: string) => {
    inline_keyboard: ({
        text: string;
        callback_data: string;
        url?: undefined;
    } | {
        text: string;
        url: string;
        callback_data?: undefined;
    })[][];
};
declare const makeAdminButtons: (link: string, next: string, prev: string) => {
    inline_keyboard: ({
        text: string;
        callback_data: string;
        url?: undefined;
    } | {
        text: string;
        url: string;
        callback_data?: undefined;
    })[][];
};
declare const editAnimeButtons: () => {
    inline_keyboard: {
        text: string;
        callback_data: string;
    }[][];
};
declare const editMovieButton: () => {
    inline_keyboard: {
        text: string;
        callback_data: string;
    }[][];
};
export { makeButtons, makeAdminButtons, editAnimeButtons, editMovieButton };
