import { Scenes, Composer } from "telegraf";
import * as DramaHandlers from "./dramaHandler.js";
var on = Composer.on;
var dramaSession = new Scenes.WizardScene("addDrama", 
// Step 1 ask the Drama name
on("message", DramaHandlers.askDName), 
// Step 2 handle the drama name and ask Genre
on("message", DramaHandlers.handleDNameAskGenres), 
// Step 3 handle genere and ask Year of drama
on("message", DramaHandlers.handleGeneresAskYear), 
// Step 4 handle year and ask the season of drama
on("message", DramaHandlers.handleYearAskSeason), 
// Step 5 handle season and ask the lang
on("message", DramaHandlers.handleSeasonAskLang), 
// Step 6 handle the lang and ask description (synop..)
on("message", DramaHandlers.handleLangAskQuality), 
// Step 7 handle des and ask Quality
// on("message", DramaHandlers.handleDesAskQuality),
// Step 8 handle quality and ask Rating
on("message", DramaHandlers.handleQualityAskRating), 
// Step 9 handle rating and ask channel
on("message", DramaHandlers.handleRatingAskSub), 
// Step 10 handle channel and ask episodes of drama
// on("message", DramaHandlers.handleChannelAskSub),
// Step 11 handle episodes and ask poster
on("message", DramaHandlers.handleSubAskEps), 
// Step 12 handle episodes and ask poster
on("message", DramaHandlers.handleEpsAskPoster), 
// Step 13 handle poster ask file or msg any type of ...
on("message", DramaHandlers.handlePosterAskRelatedMsg), 
// Step 14 last done store to database and send a reference
on("message", DramaHandlers.done));
export default dramaSession;
