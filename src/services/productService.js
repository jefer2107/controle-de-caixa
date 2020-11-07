const product = [
    {
        id:"0",
        nome:"arroz",
        tipo:"alimento",
        valor:50,
        codigo:"111111"
    },
    {
        id:"1",
        nome:"detergente",
        tipo:"limpeza",
        valor:10,
        codigo:"222222"
    },
    {
        id:"2",
        nome:"biscoito",
        tipo:"alimento",
        valor:5,
        codigo:"333333"
    }
]

let numberId = 0

export const itemToBeChecked = (item)=>{
    numberId++
    item.id = numberId
    if(item.nome === "" || item.tipo === "" || item.valor === "" || item.codigo === "") return Promise.reject("Primeiro precisa preencher os campos vazios")
    const verifyItem = product.find(e=> e.codigo === item.codigo)
    if(verifyItem) return Promise.reject("Item já cadastrado")
    product.push(item)
    return Promise.resolve()
}

export const returnProduct = ()=>{
    return Promise.resolve(product)
}

export const addItemByCode = (item)=>{
    const itemToBeAdd = product.find(e=>e.codigo === item.codigo)

    if(itemToBeAdd)
        return Promise.reject()
    else
        product.push(item)
        return Promise.resolve()
}

export const itemToBeDeleted = (item)=>{
    const verifyItemToBeDeleted = product.findIndex(e=> e.codigo === item)

    product.splice(verifyItemToBeDeleted, 1)

    return Promise.resolve()
}

export const returnItemById = (id)=>{
    const verifyItemById = product.find(e=> e.id == id)

    if(!verifyItemById) 
        return Promise.reject()
    else
        return Promise.resolve(verifyItemById)
}

export const returnItemByCode = (code)=>{
    const verifyCode = product.find(e=>e.codigo === code)

    if(!verifyCode)
        return Promise.reject()
    else
        return Promise.resolve(verifyCode)
}

export const returnNewItem = (item)=>{
    const itemToBeChanged = product.find(e=>e.id == item.id)

    itemToBeChanged.nome = item.nome
    itemToBeChanged.tipo = item.tipo
    itemToBeChanged.valor = item.valor
    itemToBeChanged.codigo = item.codigo

    return Promise.resolve()
}