// import db from "@/lib/db";
// import { Product } from "@/lib/model/product";

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => console.log("Connected to MongoDB"));


// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { name, price, color,company, category } = req.body;

//       if (!name || !price || !color  || !company || !category) {
//         return res.status(400).json({ error: 'All fields are required' });
//       }

//       const newProduct = new Product({ name, price,  color ,company, category });
//       await newProduct.save();

//       return res.status(201).json(newProduct);
//     } catch (error) {
//       return res.status(500).json({ error: 'Server error' });
//     }
//   } else {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }}