import mongoose from "mongoose";

const Schema = mongoose.Schema;
export { Alias };

const aliasSchema = new Schema(
  {
    name: String,
    image: String,
    alias: String,
    comicsTotal: { type: Number, default: 0 },
    seriesTotal: { type: Number, default: 0 },
    storiesTotal: { type: Number, default: 0 },
    eventsTotal: { type: Number, default: 0 },
    //profile will be assigned as an agent to track this alias after completion of the tour
    agent: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    //reference comics Schema which is an array of secret files/comics for this alias
    comics: [{ type: Schema.Types.ObjectId, ref: "Comic" }],
    //this is the marvel character id! will need for comics database to MATCH!
    aliasId: Number,/* same as marvel id for comic character with alias name */
    comicId: Number /* same as marvel id for comic character id with superbeing name or same as alias id if no alias name found in marvel api
     */
  },
  {
    timestamps: true,
  }
);

const Alias = mongoose.model("Alias", aliasSchema);
