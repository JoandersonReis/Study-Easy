import { Router } from "express"
const router = Router()

import AccountsController from "./controllers/AccountsController"
import MattersController from "./controllers/MattersController"
import SubjectsController from "./controllers/SubjectsController"

const accountsController = new AccountsController()
const mattersController = new MattersController()
const subjectsController = new SubjectsController()

router.post("/accounts", accountsController.create)
router.get("/accounts", accountsController.index)
router.post("/login", accountsController.login)

router.post("/matters", mattersController.create)
router.get("/matters", mattersController.index)
router.delete("/matters/:id", mattersController.delete)
router.put("/matters", mattersController.update)

router.post("/subjects", subjectsController.create)
router.put("/subjects", subjectsController.update)
router.get("/subjects/:matterId", subjectsController.index)
router.delete("/subjects/:id", subjectsController.delete)

export default router