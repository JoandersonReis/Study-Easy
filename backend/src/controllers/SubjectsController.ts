import knex from "../database/connection"
import { Request, Response } from "express"

export default class SubjectsController {
  async create(req: Request, res: Response) {
    const { name, matterId } = req.body

    const response = await knex("subjects").insert({name, matterId})

    return res.status(200).json()
  }

  async index(req: Request, res: Response) {
    const { matterId } = req.params

    const subjects = await knex("subjects").select("*").where("matterId", matterId)

    return res.json(subjects)
  }

  async update(req: Request, res: Response) {
    const { name, id, does } = req.body

    await knex("subjects").where("id", id).update({ name, do: does })

    return res.status(200).json()
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params

    await knex("subjects").where("id", id).delete()

    return res.status(200).json()
  }
}
