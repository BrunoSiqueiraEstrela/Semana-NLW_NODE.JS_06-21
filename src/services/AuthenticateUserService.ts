import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs"

import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest{

  email:string;
  password: string;

}

class AuthenticateUserService{

  async execute({email,password}:IAuthenticateRequest){

    const usersRepositories = getCustomRepository(UsersRepositories);

    //Verificar se Email Existe
    const user = await usersRepositories.findOne({
      email
    });

    if(!user){

      throw new Error("Email/Password incorrect");
    }
    //verificar se senha está correta

    const passwordMatch = await compare(password,user.password);

    if(!passwordMatch){
      throw new Error("Email/Password incorrect");

    }
    //Gerar token
    const token = sign({
      email:user.email
    },"cd4fa7c71882c9f4866ee7f88c42ed38",{subject: user.id,
    expiresIn:"1d"
  })

  }
  
}

export{ AuthenticateUserService }