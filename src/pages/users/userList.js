import React, { useState, useEffect } from "react"
import "./userList.css"
import { returnItem } from "../../services/registerServices"

export default function UserList(){
    const [item, setItem] = useState([])

    useEffect(()=>{
        returnItem().then((x)=>{
            setItem(x)
        })
    }, [item])

    return(
        <div className="container-fluid user-list">
            <h3 className="text-center font-weight-bold py-2">Lista de Usuários</h3>
              <table className="container">
                    <thead className="text-center font-weight-bold">
                        <tr>
                            <td>NOME</td>
                            <td>EMAIL</td>
                        </tr>
                    </thead>
                    <tbody>
                        {item.map((x)=>{
                            return(
                                <tr>
                                    <td> {x.nome} </td>
                                    <td> {x.email} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}