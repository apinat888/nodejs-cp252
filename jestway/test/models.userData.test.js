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
})

test('Remove two', () => {
  testUserData = new UserData();

  const user = { name: 'test' }; // 👈 ต้องมีบรรทัดนี้

  testUserData.addUser(user);
  testUserData.addUser(user);
  testUserData.addUser(user);

  const userCountBefore = testUserData.getUserCount();

  testUserData.removeUser();
  testUserData.removeUser();

  const userCountAfter = testUserData.getUserCount();

  expect(userCountAfter).toBe(userCountBefore - 2);
});
