export function processCaption(oldCaption, join) {
    var newCaption = "";
    var stringWithoutSpecialChars = oldCaption
        .replace(/\./g, " ")
        .replace(/_/g, " ")
        .replace(/-/g, " ")
        .replace(/(?:https?|ftp):\/\/[\n\S]+/g, "");
    newCaption = stringWithoutSpecialChars.replace(/@\w+\s?/g, "");
    var indexOfSize = newCaption.indexOf("🔘 SIZE");
    if (indexOfSize !== -1) {
        newCaption = newCaption.substring(0, indexOfSize);
    }
    else {
        newCaption = newCaption;
    }
    var plotIndex = newCaption.indexOf("Plot:");
    if (plotIndex !== -1) {
        newCaption = newCaption.substring(0, plotIndex);
    }
    newCaption += "\n JOIN: @".concat(join, "\n for more drama movies!!");
    return newCaption;
}
export function editAIOTitle(oldCaption, join) {
    var newCaption = "";
    newCaption = oldCaption
        .replace(/\#/g, " ")
        .replace(/\👉/g, "")
        .replace(/\👈/g, "")
        .replace(/\"/g, " ")
        .replace("🍯Join Here First ⬇️", " ")
        .replace(" (We provide all dramas in English Subbed) ", " ")
        .replace("🐝Download Here ⬇️", "Click On Get This To Download")
        .replace("Tap on Join Here First to Download Episodes", "")
        .replace(/(?:https?|ftp):\/\/[\n\S]+/g, "");
    newCaption = newCaption.replace(/@\w+\s?/g, "");
    var indexOfSize = newCaption.indexOf("🔘 SIZE");
    var request = newCaption.indexOf("Request");
    var credit = newCaption.indexOf("Credit/Partner");
    var mkv = newCaption.indexOf("mkv");
    var plotIndex = newCaption.indexOf("Plot:");
    if (indexOfSize !== -1) {
        newCaption = newCaption.substring(0, indexOfSize);
    }
    if (credit !== -1) {
        newCaption = newCaption.substring(0, credit) + "Thanks to Knc Korean";
    }
    if (mkv !== -1) {
        newCaption = newCaption.substring(0, credit) + "Thanks to Knc Korean";
    }
    if (request !== -1) {
        newCaption = newCaption.substring(0, request);
    }
    if (plotIndex !== -1) {
        newCaption = newCaption.substring(0, plotIndex);
    }
    return newCaption;
}
