import { Document } from "mongoose";

export interface IPlayer extends Document{
  readonly id: string
  readonly phone: string
  readonly email: string
  name: string
  password: string
  ranking: string
  posRanking: number
  playerImg: string
}
