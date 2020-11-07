import React, { useState, useEffect } from "react"
import "./productList.css"
import { returnProduct, itemToBeDeleted } from "../../services/productService"
import { useHistory } from "react-router-dom"

export default function ProductList(){
    const [item, setItem] = useState([])
    const history = useHistory()

    useEffect(()=>{
        returnProduct().then((x)=>{
            setItem(x)
        })
    }, [item])

    const excluir = (codigo)=>{
        itemToBeDeleted(codigo).then(()=>{
            setItem((state)=>{
                const newList = [...state]
                const verifyItem = item.findIndex(e=> e.codigo === codigo)
                newList.splice(verifyItem, 1)
                return newList
            })
        })
    }

    const editarItem = (id)=>{
        history.push(`/product-edit/${id}`)
    }

    return(
        <div className="container-fluid product-list">
            <h3 className="text-center font-weight-bold py-2">Lista de Produtos</h3>
            <table className="container">
               <thead className="text-center font-weight-bold">
                    <tr>
                        <td>ID</td>
                        <td>NOME</td>
                        <td>TIPO</td>
                        <td>VALOR</td>
                        <td>CÓDIGO</td>
                        <td>EDIÇAO</td>
                    </tr>
               </thead>
               <tbody>
                   {item.map((x)=>{
                       return(
                           <tr>
                               <td> {x.id} </td>
                               <td> {x.nome} </td>
                               <td> {x.tipo} </td>
                               <td> {x.valor} </td>
                               <td> {x.codigo} </td>
                               <td>
                                   <button onClick={()=> editarItem(x.id)} type="button" className="btn btn-primary">EDITAR</button>
                                   <button onClick={()=> excluir(x.codigo)} type="button" className="btn btn-danger">EXCLUIR</button>
                               </td>
                           </tr>
                       )
                   })}
               </tbody>
            </table>
        </div>
    )
}