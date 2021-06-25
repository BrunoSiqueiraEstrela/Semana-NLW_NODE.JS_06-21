import {  Request, response, Response} from "express"
import { Compliments } from "../entities/Compliments";
import { CreateComplimentService } from "../services/CreateComplimentService"

class CreateComplimentController{

  async handle(request: Request, response:Response) {
    const {tag_id, user_sender, user_receiver, message } = request.body;
    const createComplimentService = new CreateComplimentService();

   const compliment =  await createComplimentService.execute({
      tag_id,
      user_sender,
      user_receiver,
      message
    });

    return response.json(compliment)
  }
}

export { CreateComplimentController }