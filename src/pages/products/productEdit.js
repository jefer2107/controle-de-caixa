import React, { useState, useEffect } from "react"
import "./productEdit.css"
import { useParams, useHistory } from "react-router-dom"
import { returnItemById, returnNewItem } from "../../services/productService"

export default function ProductEdit(){
    const [model, setModel] = useState([])
    let {id} = useParams()
    const history = useHistory()

    useEffect(()=>{
        returnItemById(id).then((x)=>{
            setModel(x)
        })
    }, [])

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const salvar = (event)=>{
        returnNewItem(model).then(()=>{
            history.push("/product-list")
        })

        event.preventDefault()
    }

    return(
        <div className="product-edit d-flex">
            <form onSubmit={salvar} className="mx-auto">
                <h3 className="text-center font-weight-bold py-2">Editar Produto</h3>
                <input onChange={changeModel} className="form-control my-1" type="text" name="nome" value={model.nome} />
                <input onChange={changeModel} className="form-control my-1" type="text" name="tipo" value={model.tipo} />
                <input onChange={changeModel} className="form-control my-1" type="text" name="valor" value={model.valor} />
                <input onChange={changeModel} className="form-control my-1" type="text" name="codigo" value={model.codigo} />
                <button type="submit" className="btn btn-primary btn-block my-2">Salvar</button>
            </form>
        </div>
    )
}