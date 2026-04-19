const User = require('../models/user');
const UserData = require('../models/userData');

// Count method
describe('Count user', () => {
    test('default user count', () => {
      testUserData = new UserData();  
      const userCount = testUserData.getUserCount();
      expect(userCount).toEqual(3);
    })

    test('clear user and Count', () => {
        testUserData = new UserData(); 
        testUserData.clearUsers()
        const userCount = testUserData.getUserCount();
        expect(userCount).toEqual(0);
    
    })
})

// Remove user
describe('remove user', () => {
    test('Remove one', () => {
      testUserData = new UserData();
      const userCountBefore = testUserData.getUserCount();
      testUserData.removeOneUser();
      const userCountAfter = testUserData.getUserCount();
      const difUser = userCountBefore - userCountAfter;
      expect(difUser).toEqual(1);
    })
    test('Remove Two', () => {
      testUserData = new UserData();
      const userCountBefore = testUserData.getUserCount();
      testUserData.removeTwoUser();
      const userCountAfter = testUserData.getUserCount();
      const difUser = userCountBefore - userCountAfter;
      expect(difUser).toEqual(2);
    })
    test('Remove from empty users', () => {
      testUserData = new UserData();
      testUserData.clearUsers();
      const result = testUserData.removeOneUser();
      expect(result).toEqual(null);
    })
})
