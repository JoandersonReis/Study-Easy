import { Request, Response } from "express"
import knex from "../database/connection"

export default class AccountsController {
  async create(req: Request, res: Response) {
    const { username, password } = req.body

    const alreadyExists = await knex("accounts").select("*").where("username", username).first()

    if(alreadyExists) {
      return res.status(500).json({ message: "Já existe uma conta com esse nome" })
    }

    try {
      await knex("accounts").insert({username, password})

      return res.json({ message: "Conta criada com sucesso" })
    } catch(err) {
      return res.json({ message: "Erro ao criar a conta" })
    }
  }

  async index(req: Request, res: Response) {
    const users = await knex("accounts").select("*")

    return res.json(users)
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body

    const usernameExists = await knex("accounts").select("*").where("username", username).first()
    const passwordExists = await knex("accounts").select("*").where("password", password).first()

    if(usernameExists && passwordExists) {
      return res.status(200).json({id: usernameExists.id, name: usernameExists.username})
    }

    return res.status(404).json({ message: "Username ou Senha errados!" })
  }
}