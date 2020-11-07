const user = [
    {
        nome:"jefferson",
        email:"jefer210784@gmail.com",
        senha:"123321"
    }
]

export const registerUserService = (item)=>{
    if(item.nome == "" || item.email == "" || item.senha == "") return Promise.reject("Primeiro deve preencher os campos vazios")
    if(item.email.length > 30) return Promise.reject("O email deve conter até 15 caracteres")
    if(item.senha.length !== 6) return Promise.reject("A senha deve conter até 15 caracteres")

    const verifyUser = user.find(e => e.email === item.email)
    if(verifyUser) return Promise.reject("Email já cadastrado no sistema")

    user.push(item)
    return Promise.resolve("Usuário cadastrado com sucesso!")

}

export const returnItem = ()=>{
    return Promise.resolve(user)
}

export const returnItemByEmail = (email)=>{
    const verifyEmail = user.find(e=>e.email === email)

    if(!verifyEmail) 
        return Promise.reject("Usuário não autenticado")
    else
        return Promise.resolve(verifyEmail)
}