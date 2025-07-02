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
  
});
