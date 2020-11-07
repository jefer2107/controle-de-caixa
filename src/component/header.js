import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div>
            <ol>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register-user">Cadastro</Link></li>
                <li><Link to="/user-list">Lista de Usuário</Link></li>
                <li><Link to="/product-register">Cadastro de Produtos</Link></li>
                <li><Link to="/product-list">Lista de Produtos</Link></li>
                <li><Link to="/cashier">Operador de Caixa</Link></li>
            </ol>
        </div>
    )
}