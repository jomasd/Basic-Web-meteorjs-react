import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // Check if an admin account exists
  const adminUser = Meteor.users.findOne({ username: 'admin' });

  // If not, create one
  if (!adminUser) {
    Accounts.createUser({
      username: 'admin',
      password: 'adminpassword', // Replace with a secure password
      // Add any additional fields you need
    });
  }
  // If the blogPosts collection is empty, add some data.
  if (BlogPosts.find().count() === 0) {
    const data = [
      { title: 'First Post', content: 'This is the first post.' },
      { title: 'Second Post', content: 'This is the second post.' },
      { title: 'Third Post', content: 'This is the third post.' },
      // Add more dummy blog posts as needed
    ];

    data.forEach((post) => BlogPosts.insert(post));
  }
});
