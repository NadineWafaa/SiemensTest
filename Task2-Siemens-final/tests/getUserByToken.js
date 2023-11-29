
const request = require('supertest');
const app = require('../mock-user-auth'); 

describe('Get user by token API', () => {
    test('should Get user by token', async () => {
      const response = await request(app)
        .get('/api/v1/users')
        .set({"id": 46643,
        "name": "user",
        "email": "user@gmail.com",
        "password": "user123",
        "imageUrl": "https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg"})
        .send({'token' :'eyJhbGciOiJI...',
        'Authorization': 'token'});
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message');
    });
});

