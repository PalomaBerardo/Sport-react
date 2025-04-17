const misProductos = [
    {id: 1, nombre: "Campera", stock: 12, precio: 25000, img: "../public/imagenes/campera1.jpg", idCat:"Buzos/Camperas"},
    {id: 2, nombre: "Campera", stock: 12, precio: 20000, img: "../public/imagenes/campera2.jpg", idCat:"Buzos/Camperas"},
    {id: 3, nombre: "Top", stock: 12, precio: 15000, img: "../public/imagenes/top1.jpg", idCat:"Tops/Remeras"},
    {id: 4, nombre: "Top", stock: 12, precio: 10000, img: "../public/imagenes/top2.jpg", idCat:"Tops/Remeras"},
]

export const getProductos = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
        resolve(misProductos)
        },100)
    })
}

export const getUnProducto = (id) => {
return new Promise(resolve =>{
    setInterval(()=>{
        const producto = misProductos.find(item => item.id === id)
        resolve(producto)
    },100)
})

}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve =>{
        setTimeout(() =>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        })
    },100)
}