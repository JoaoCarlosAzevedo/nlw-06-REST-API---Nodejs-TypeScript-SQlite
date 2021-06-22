import { response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserControler";

const router = Router();
const createUserControler = new CreateUserController();

router.post("/users",createUserControler.handle)

router.get("/", (request: any,response: any)=>{
    console.log("entrei");
    return response.json( { message:"hii"} )
}) 

export { router }