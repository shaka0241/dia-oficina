const products= [
  { name: "Laptop", price: 850, stock: 15 },
  { name: "Mouse", price: 25, stock: 50 },
  { name: "Teclado", price: 45, stock: 20 }
];


const addCart = (productName, quantity) => {

    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase()
    );
    if(!product) {
        return console.log(`${productName} no encontrado intente de nuevo`)
    }

    if (quantity > product.stock) {
        return console.log(`No hay stock suficiente del siguiente producto: ${productName}`)
    }

    let total = product.price * quantity;
   
    console.log(`El total de su compra es la sig: ${quantity}  del producto: ${productName}`)

}

addCart("Mouse", 5)