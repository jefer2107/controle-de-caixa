import React, { useState } from "react"
import "./productRegister.css"
import { itemToBeChecked } from "../../services/productService"
import { useHistory } from "react-router-dom"

export default function ProductRegister(){
    const [model, setModel] = useState({nome:"", tipo:"", valor:"", codigo:""})
    const [message, setMessage] = useState()
    const history = useHistory()

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const cadastrar = (event)=>{
        itemToBeChecked(model).then((x)=>{
            history.push("/product-list")
        }).catch((e)=>{
            setMessage(e)
        })

        event.preventDefault()
    }

    return(
        <div className="product-register d-flex">
            <form onSubmit={cadastrar} className="mx-auto">
                <h3 className="text-center font-weight-bold py-2">Cadastro de Produtos</h3>
                <input onChange={changeModel} className="form-control my-1" type="text" name="nome" placeholder="Digite o nome" />
                <input onChange={changeModel} className="form-control my-1" type="text" name="tipo" placeholder="Digite o tipo" />
                <input onChange={changeModel} className="form-control my-1" type="text" name="valor" placeholder="Digite o valor" />
                <input onChange={changeModel} className="form-control my-1" type="text" name="codigo" placeholder="Digite o código de barras" />
                <button type="submit" className="btn btn-success btn-block my-2">Cadastrar</button>
                <span> {message} </span>
            </form>
        </div>
    )
}