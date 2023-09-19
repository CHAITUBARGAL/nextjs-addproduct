import db from "@/lib/db";
import Product from "@/lib/model/product"; // Import the Product model

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const { id } = req.query; // Get the product ID from the URL query parameters
      const { name, price, company, color, category } = req.body;

      if (!id || !name || !price || !company || !color || !category) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, price, company, color, category },
        { new: true } // Return the updated document
      );

      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
