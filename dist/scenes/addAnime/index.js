import { Scenes, Composer } from "telegraf";
import * as AnimeHandlers from "./animeHandler.js";
var on = Composer.on;
var dramaSession = new Scenes.WizardScene("addAnime", 
// Step 1 ask the Drama name
on("message", AnimeHandlers.askAName), 
// Step 2 handle the drama name and ask Season
on("message", AnimeHandlers.handleANameAskSeason), 
// Step 3 handle season and ask lang of drama
on("message", AnimeHandlers.handleSeasonAskLang), 
// Step 4 handle lang and quality the season of drama
on("message", AnimeHandlers.handleLangAskQuality), 
// Step 8 handle quality and ask Sub
on("message", AnimeHandlers.handleQualityAskSub), 
// Step 11 handle quality and ask poster
on("message", AnimeHandlers.handleSubAskEps), 
// Step 12 handle episodes and ask poster
on("message", AnimeHandlers.handleEpsAskPoster), 
// Step 13 handle poster ask file or msg any type of ...
on("message", AnimeHandlers.handlePosterAskRelatedMsg), 
// Step 14 last done store to database and send a reference
on("message", AnimeHandlers.done));
export default dramaSession;
