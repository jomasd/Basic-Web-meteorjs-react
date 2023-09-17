import { Meteor } from 'meteor/meteor';
import { Artworks, Portfolio } from '../imports/api/portfolio/collections.js';
import './startup.js';
Meteor.startup(() => {
  // Insert dummy data for Artworks if empty
  if (Artworks.find().count() === 0) {
    const dummyArtworks = [
      {
        artworkId: '1',
        title: 'Sample Artwork 1',
        description: 'This is a sample artwork.',
        medium: 'Oil on Canvas',
        dimensions: '24x36 inches',
        yearCreated: 2021,
        imageUrl: 'http://example.com/sample1.jpg',
        isFeatured: true,
        price: 500,
        status: 'Available',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        artworkId: '2',
        title: 'Sample Artwork 2',
        description: 'This is another sample artwork.',
        medium: 'Watercolor',
        dimensions: '18x24 inches',
        yearCreated: 2020,
        imageUrl: 'http://example.com/sample2.jpg',
        isFeatured: false,
        price: 300,
        status: 'Sold',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more dummy artworks here
    ];

    dummyArtworks.forEach((artwork) => {
      Artworks.insert(artwork);
    });
  }

  // Insert dummy data for Portfolio if empty
  if (Portfolio.find().count() === 0) {
    const dummyPortfolio = {
      portfolioId: '1',
      userId: 'sampleUserId',
      categories: [
        {
          categoryId: '1',
          name: 'Sample Category 1',
          description: 'This is a sample category.',
          artworks: ['1', '2'], // IDs of artworks in this category
        },
        {
          categoryId: '2',
          name: 'Sample Category 2',
          description: 'This is another sample category.',
          artworks: ['1'], // IDs of artworks in this category
        },
        // Add more dummy categories here
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    Portfolio.insert(dummyPortfolio);
  }
});