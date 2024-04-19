/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose/types/inferschematype.js" />
import mongoose, { Model } from "mongoose";
import { Link, DramaDocument } from "../interfaces/drama.js";
export declare const linkSchema: mongoose.Schema<Link, mongoose.Model<Link, any, any, any, mongoose.Document<unknown, any, Link> & Link & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Link, mongoose.Document<unknown, {}, mongoose.FlatRecord<Link>> & mongoose.FlatRecord<Link> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const dramaSchema: mongoose.Schema<DramaDocument, mongoose.Model<DramaDocument, any, any, any, mongoose.Document<unknown, any, DramaDocument> & DramaDocument & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, DramaDocument, mongoose.Document<unknown, {}, mongoose.FlatRecord<DramaDocument>> & mongoose.FlatRecord<DramaDocument> & {
    _id: mongoose.Types.ObjectId;
}>;
declare const DramaModel: Model<DramaDocument>;
export default DramaModel;
