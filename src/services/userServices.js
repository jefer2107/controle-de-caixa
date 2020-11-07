import { returnItemByEmail } from "./registerServices"


export const autenticateUser = (nome, email, senha)=>{
    if(nome=="" || email=="" || senha=="") return Promise.reject("Primeiro deve preencher os campos vazios")
    if(email.length > 30) return Promise.reject("O email deve conter até 15 caracteres")
    if(senha.length!==6) return Promise.reject("A senha deve conter até 15 caracteres")

    return returnItemByEmail(email).then((x)=>{
        if(!x || x.senha !== senha) return Promise.reject()
        return Promise.resolve("Usuário Logado!")
    })
}