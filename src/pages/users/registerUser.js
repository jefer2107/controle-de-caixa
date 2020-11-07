import react, { useState } from "react"
import "./registerUser.css"
import { registerUserService } from "../../services/registerServices"
import { useHistory } from "react-router-dom"

export default function RegisterUser(){
    const [model, setModel] = useState({nome:"", email:"", senha:""})
    const [message, setMessage] = useState()
    const history = useHistory()

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const register = (event)=>{
        registerUserService(model).then((x)=>{
            history.push("/user-list")
        }).catch((e)=>{
            setMessage(e)
        })

        event.preventDefault()
    }

    return(
        <div className="register-user d-flex">
            <form onSubmit={register} className="mx-auto">
                <h3 className="text-center font-weight-bold py-2">Cadastro de Usuário</h3>
                <input onChange={changeModel} className="form-control my-1" type="text" name="nome" placeholder="Digite o nome" />
                <input onChange={changeModel} className="form-control my-1" type="email" name="email" placeholder="Digite o email" />
                <input onChange={changeModel} className="form-control my-1" type="password" name="senha" placeholder="Digite a senha" />
                <button  className="btn btn-success btn-block my-2" type="submit">Cadastrar</button>
                <span className="text-center text-success font-weight-bold"> {message} </span>
            </form>
        </div>
    )
}