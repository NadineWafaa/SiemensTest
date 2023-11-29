const request = require('supertest');
const app = require('../mock-user-auth'); 

describe('Patch user by token API', () => {
    test('should Patch user by token', async () => {
      const response = await request(app)
        .patch('/api/v1/users')
        .set('message', "Users updated with success")
        .send({"name": "newName",
        "email": "new_email@gmail.com",
        "password": "newpassword123"});
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message');
    });
});

