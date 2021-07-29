import mongoose from 'mongoose'

const Schema = mongoose.Schema
export {
  Comic
}

const comicSchema = new Schema(
  {
    name: String,
    image: String,
    alias: Array,
    comicsTotal: { type: Number, default: 0 },
    seriesTotal: { type: Number, default: 0 },
    storiesTotal: { type: Number, default: 0 },
    eventsTotal: { type: Number, default: 0 },
    //profile will be assigned as an agent to track this alias after completion of the tour
    agent: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    //reference alias Schema which is an api
    alias: [{ type: Schema.Types.ObjectId, ref: "Alias" }],
    //this is the marvel character id! will need for comics database to MATCH!
    aliasId: Number,/* same as marvel id for comic character with alias name */
    comicId: Number /* same as marvel id for comic character id with superbeing name or same as alias id if no alias name found in marvel api
     */
  },
  {
    timestamps: true,
  }
);
const Comic = mongoose.model('Comic', comicSchema)

