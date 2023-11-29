// __tests__/login.test.js
const request = require('supertest');
const app = require('../mock-user-auth'); // replace with the correct import for your app

describe('Delete all users API', () => {
    test('should delete all users', async () => {
      const response = await request(app)
        .delete('/api/v1/all-users')
        .set('message', "Users deleted with success")
        .send({"key_admin": "keyadmin123"});
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message');
    });
});

