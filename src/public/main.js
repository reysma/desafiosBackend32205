const socket = io();

socket.on("products", (products) => {
  const allProductsElements = products
    .map(
      (product) => `
        <tr>
            <td> ${product.title} </td>
            <td> ${product.description} </td>
            <td> ${product.price} </td>
            <td> <img height="50px" width="50px" src=${product.thumbnail} /> </td>
            <td> ${product.code} </td>
            <td> ${product.stock} </td>
           
        </tr>
    `
    )
    .join(" ");

  productsContainer.innerHTML = allProductsElements;
});