import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

// Create the Artworks collection
export const Artworks = new Mongo.Collection('artworks');

// Define the schema for Artworks
const ArtworkSchema = new SimpleSchema({
  artworkId: String,
  title: String,
  description: String,
  medium: String,
  dimensions: String,
  yearCreated: Number,
  imageUrl: String,
  isFeatured: Boolean,
  price: Number,
  status: String,
  createdAt: Date,
  updatedAt: Date,
});

// Attach the schema to the Artworks collection
Artworks.attachSchema(ArtworkSchema);

// Create the Portfolio collection
export const Portfolio = new Mongo.Collection('portfolio');

// Define the schema for Portfolio categories
const CategorySchema = new SimpleSchema({
  categoryId: String,
  name: String,
  description: String,
  artworks: Array,
  'artworks.$': String,
});

// Define the schema for Portfolio
const PortfolioSchema = new SimpleSchema({
  portfolioId: String,
  userId: String,
  categories: Array,
  'categories.$': CategorySchema,
  createdAt: Date,
  updatedAt: Date,
});

// Attach the schema to the Portfolio collection
Portfolio.attachSchema(PortfolioSchema);
