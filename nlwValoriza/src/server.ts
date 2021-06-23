import express, { request, response } from "express";
// @types/express
const app = express();
/**
 * GET    => BUSCAR UMA INFORMAÇÃO  
 * POST   => INSERIR (CRIAR) UMA INFORMAÇÃO
 * PUT    => ALTERAR UMA INFORMAÇÃO
 * DELETE => REMOVER UM DADO    
 * PATCH  => ALTERAR UMA INFORMAÇÃO ESPECIFICA
 */


app.get("/test", (request, response)=>{
  //REQUEST => ENTRANDO
  //RESPONSE => SAINDO
  return response.send("Óla NLW")


});

app.post("/test-post",(request, response)=>{
  return response.send("Óla NLW POST")

});

// http://localhost:3000
app.listen(3000,() => console.log("Server is running teste"));