import { Scenes, Composer } from "telegraf";
import * as MovieHandlers from "./movieHandler.js";
var on = Composer.on;
var movieSession = new Scenes.WizardScene("addMovie", 
// Step 1 ask the movie name
on("message", MovieHandlers.askMName), 
// Step 2 handle the movie name and ask Genre
on("message", MovieHandlers.handleMNameAskGenres), 
// Step 3 handle genere and ask Year of movie
on("message", MovieHandlers.handleGeneresAskYear), 
// Step 4 handle year and ask the season of movie
on("message", MovieHandlers.handleYearAskLang), 
// Step 5 handle the lang and ask description (synop..)
on("message", MovieHandlers.handleLangAskQuality), 
// Step 6 handle des and ask Quality
// on("message", MovieHandlers.handleDesAskQuality),
// Step 8 handle quality and ask Rating
on("message", MovieHandlers.handleQualityAskRating), 
// Step 7 handle rating and ask channel
on("message", MovieHandlers.handleRatingAskSub), 
// Step 8 handle channel and ask episodes of movie
// on("message", MovieHandlers.handleChannelAskSub),
// Step 9 handle episodes and ask poster
on("message", MovieHandlers.handleSubAskPoster), 
// Step 10 handle poster ask file or msg any type of ...
on("message", MovieHandlers.handlePosterAskRelatedMsg), 
// Step 11 last done store to database and send a reference
on("message", MovieHandlers.done));
export default movieSession;
