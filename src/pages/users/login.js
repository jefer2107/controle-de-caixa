import React, { useState } from "react"
import "./login.css"
import { autenticateUser } from "../../services/userServices"

export default function Login(){
    const [model, setModel] = useState({nome:"", email:"", senha:""})
    const [message, setMessage] = useState()

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const logar = (event)=>{
        autenticateUser(model.nome, model.email, model.senha).then((x)=>{
            setMessage(x)
        }).catch((e)=>{
            setMessage(e)
        })

        event.preventDefault()
    }

    return(
        <div className="login d-flex">
            <form onSubmit={logar} className="mx-auto">
                <h3 className="text-center font-weight-bold py-2">Login</h3>
                <input onChange={changeModel} className="form-control my-1" type="text" name="nome" placeholder="Digite o nome" />
                <input onChange={changeModel} className="form-control my-1" type="email" name="email" placeholder="Digite o email" />
                <input onChange={changeModel} className="form-control my-1" type="password" name="senha" placeholder="Digite a senha" />
                <button className="btn btn-primary btn-block my-2" type="submit">Logar</button>
                <span className="text-primary text-center font-weight-bold"> {message} </span>
            </form>
        </div>
    )
}