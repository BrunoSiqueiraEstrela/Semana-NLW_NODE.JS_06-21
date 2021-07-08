import { Request, Response, NextFunction, response } from "express";
import { decode, verify } from "jsonwebtoken"

interface IPayLoad{
  sub:string;
}

export function ensureAuthenticated(
  request: Request, 
  reponse: Response, 
  next: NextFunction
  ) {

    //Receber o token
    const authToken = request.headers.authorization;
   // console.log(authToken)

    if(!authToken){
      return response.status(401).end();
    }

    const [,token] = authToken.split(" ")

   // console.log(token)
    try{
      //Validar se token está preenchido
       //Validar se token é valido
    const { sub } = verify(token, "cd4fa7c71882c9f4866ee7f88c42ed38") as IPayLoad;
     //recuperar informação do usuário
      request.user_id = sub;
      
    return next();
  }catch(err){
    return response.status(401).end();
  }

  


}