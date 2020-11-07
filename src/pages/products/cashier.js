import React, { useState, useEffect } from "react"
import "./cashier.css"
import { returnItemByCode, itemToBeDeleted, addItemByCode, itemToBeChecked } from "../../services/productService"

export default function Cashier(){
    const [model, setModel] = useState({codigo:""})
    const [item, setItem] = useState([])
    const [message, setMessage] = useState()
    let valorTotal = 0

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const remove = (codigo)=>{
        const verifyCode = item.find(e=>e.codigo === codigo)
        itemToBeChecked(verifyCode).then(()=>{
            setItem((product)=>{
                const newProduct = [...product]
                const verifyProduct = item.findIndex(e=>e.codigo === codigo)
                newProduct.splice(verifyProduct, 1)
                return newProduct
            })
        })
    }

    const addItem = (itens)=>{
        if(!item.some(e=>e.codigo === itens.codigo)){
            setItem((state)=>{
                return [...state, itens]
            })
            setModel({codigo:""})
        }else{
            setItem((state)=>{
                return [...state, itens]
            })
        }
            
    }

    useEffect(()=>{
        if(model.codigo.length === 6){
            returnItemByCode(model.codigo).then((x)=>{
                addItem(x)
                itemToBeDeleted(model.codigo)
                setModel({codigo:""})
                setMessage()
            }).catch((e)=>{
                setModel({codigo:""})
                setMessage("Ítem nao encontrado!")
            })
        }   
    },[model.codigo])

    return(
        <div className="container-fluid cashier">
            <h3 className="text-center font-weight-bold py-2">Operador de Caixa</h3>
            <form className="container my-2">
                <input onChange={changeModel} className="form-control" value={model.codigo} type="text" name="codigo" placeholder="Digite o código de barras" />
                <div className="text-center text-primary font-weight-bold my-2">
                    <span> {message} </span>
                </div>
            </form>
            <table className="container my-4 cashier-tabela">
                <thead className="text-center font-weight-bold">
                    <tr>
                        <td>COD.BARRAS</td>
                        <td>NOME</td>
                        <td>TIPO</td>
                        <td>VALOR</td>
                        <td>SUTOTAL</td>
                        <td>EDIÇAO</td>
                    </tr>
                </thead>
                <tbody>
                    {item.map((x)=>{
                        return(
                            <tr>
                                <td> {x.codigo} </td>
                                <td> {x.nome} </td>
                                <td> {x.tipo} </td>
                                <td> {x.valor} </td>
                                <td> {valorTotal = valorTotal + x.valor} </td>
                                <td>
                                    <button onClick={()=> remove(x.codigo)} className="btn btn-danger btn-block">Cancelar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <table className="container valor-total">
                <tr>
                    <td className="titulo font-weight-bold">TOTAL</td>
                    <td className="total"> {valorTotal} </td>
                </tr>
            </table>
        </div>
    )
}