const request = require('supertest');
const app = require('../mock-user-auth'); 

describe('Create user API', () => {
    test('Should create user', async () => {
      const response = await request(app)
        .post('/api/v1/users')
        .set('token', 'eyJhbGciOiJI...')
        .send({"name": "user",
        "email": "user@gmail.com",
        "password": "user123"});
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('token');
    });
});

