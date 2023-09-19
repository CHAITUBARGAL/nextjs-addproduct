const getProducts = async()=>{
    let data = await fetch("http://localhost:3000/api/products/route");
    data = await data.json();
    if(data.success){
        return data.result ;
    }
}

import React from 'react'

const page = () => {
    let products =  getProducts();
    console.log(products)
  return (
    <div>
      <h1>Product List</h1>
      <table border="1">
        <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Color</td>
            <td>Company</td>
            <td>Category</td>
        </tr>
      </table>
    </div>
  )
}

export default page
