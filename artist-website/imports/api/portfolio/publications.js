import { Meteor } from 'meteor/meteor';
import { Artworks, Portfolio } from './collections.js'; // Adjust the path accordingly

Meteor.publish('portfolio.artworks', function() {
  return Artworks.find();
});

Meteor.publish('portfolio.singleArtwork', function(artworkId) {
  check(artworkId, String);
  return Artworks.find({ _id: artworkId });
});

Meteor.publish('portfolio.userPortfolio', function(userId) {
  check(userId, String);
  return Portfolio.find({ userId });
});
