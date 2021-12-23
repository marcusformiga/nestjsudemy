import * as mongoose from "mongoose"

export const playerSchema = new mongoose.Schema({
  phone: {type: Number, unique: true, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  ranking: {type: String},
  posRanking: {type: Number},
  playerImg: {type: String}

}, {timestamps: true, collection: "players"})