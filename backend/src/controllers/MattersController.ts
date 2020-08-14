import knex from "../database/connection"
import { Request, Response } from "express"


export default class MattersController {
  async create(req: Request, res: Response) {
    const { name, propertyId, days } = req.body
    
    const daysConverted = days.join(", ")

    try {
      await knex("matters").insert({
        name,
        propertyId,
        days: daysConverted
      })
      return res.status(200).json()
    } catch(err) {
      return res.status(500).json({ message: "Internal error!" })
    } 
  }

  async index(req: Request, res: Response) {
    const propertyId = req.headers.authorization

    const matters = await knex("matters").select("*").where("propertyId", propertyId)

    return res.json(matters)
  }

  async delete(req: Request, res:Response) {
    const { id } = req.params

    await knex("matters").where("id", id).delete()
    await knex("subjects").where("matterId", id).delete()

    return res.status(200).json()
  }

  async update(req: Request, res: Response) {
    const { id, name, days } = req.body
    
    const daysParsed = days.join(", ")

    await knex("matters").where("id", id).update({name, days: daysParsed})

    return res.status(200).json()
  }
}
