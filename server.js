// server.js
import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://admin:password123@localhost:27017';
const DB_NAME = process.env.DB_NAME || 'smarteinsDB';

// Connect to MongoDB
const client = new MongoClient(MONGO_URI);

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DB_NAME);
    const productsCollection = db.collection('products');

    // Seed sample products if collection is empty
    const count = await productsCollection.countDocuments();
    if (count === 0) {
      await productsCollection.insertMany([
        { name: 'Smartphone X', price: 499, category: 'smartphones' },
        { name: 'Laptop Pro', price: 1299, category: 'laptops' },
        { name: 'Wireless Earbuds', price: 99, category: 'accessories' }
      ]);
      console.log('Inserted sample products');
    }

    // API route to fetch products
    app.get('/api/products', async (req, res) => {
      try {
        const limit = parseInt(req.query.limit) || 10;
        const products = await productsCollection.find({}).limit(limit).toArray();
        res.json(products);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch products' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

main();
