"use client"
import React, { useState } from 'react'

const page = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState(""); 
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");

    const addProduct = async () => {
        console.log(name, price, color, company, category);
        let result = await fetch("http://localhost:3000/api/products/route", {
          method: "POST",
          body: JSON.stringify({ name, price, color, category, company }),
          headers: {
            "Content-Type": "application/json", 
          },
        });
        result = await result.json();
        if (result.success) {
          alert("New product added");
        }
      };
       
        
  return (
    <div>
       <h1>Add Product</h1>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter product name' /> <br /><br />
       <input type="text"  value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='enter product price' /> <br /> <br />
       <input type="text"  value={color} onChange={(e)=>setColor(e.target.value)} placeholder='enter product color' /> <br /> <br />
       <input type="text"  value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='enter product company' /> <br /> <br />
       <input type="text"  value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='enter product category' /> <br /> <br />
       <button onClick={addProduct}>Add product</button>
    </div>
  )
}

export default page
