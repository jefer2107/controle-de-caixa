import react from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./component/header"
import Login from "./pages/users/login"
import RegisterUser from "./pages/users/registerUser"
import UserList from "./pages/users/userList"
import ProductRegister from "./pages/products/productRegister"
import ProductList from "./pages/products/producList"
import ProductEdit from "./pages/products/productEdit"
import Cashier from "./pages/products/cashier"

export default function Routes(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register-user" component={RegisterUser} />
                <Route exact path="/user-list" component={UserList} />
                <Route exact path="/product-register" component={ProductRegister} />
                <Route exact path="/product-list" component={ProductList} />
                <Route exact path="/product-edit/:id" component={ProductEdit} />
                <Route exact path="/cashier" component={Cashier} />
            </Switch>
        </BrowserRouter>
    )
}