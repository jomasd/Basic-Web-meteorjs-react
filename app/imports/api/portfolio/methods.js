import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Artworks, Portfolio } from './collections.js'; // Adjust the path accordingly

Meteor.methods({
  'portfolio.addArtwork'(artwork) {
    check(artwork, Object);
    return Artworks.insert(artwork);
  },

  'portfolio.updateArtwork'(artworkId, updatedArtwork) {
    check(artworkId, String);
    check(updatedArtwork, Object);
    return Artworks.update(artworkId, { $set: updatedArtwork });
  },

  'portfolio.removeArtwork'(artworkId) {
    check(artworkId, String);
    return Artworks.remove(artworkId);
  },

  'portfolio.addCategory'(userId, category) {
    check(userId, String);
    check(category, Object);
    return Portfolio.update({ userId }, { $push: { categories: category } });
  },

  'portfolio.updateCategory'(userId, categoryId, updatedCategory) {
    check(userId, String);
    check(categoryId, String);
    check(updatedCategory, Object);
    return Portfolio.update({ userId, 'categories.categoryId': categoryId }, { $set: { 'categories.$': updatedCategory } });
  },

  'portfolio.removeCategory'(userId, categoryId) {
    check(userId, String);
    check(categoryId, String);
    return Portfolio.update({ userId }, { $pull: { categories: { categoryId } } });
  }
});
