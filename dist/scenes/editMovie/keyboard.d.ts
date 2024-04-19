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
export { makeButtons };
