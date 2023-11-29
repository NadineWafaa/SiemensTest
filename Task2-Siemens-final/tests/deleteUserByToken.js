const request = require('supertest');
const app = require('../mock-user-auth'); 

describe('Delete user by token API', () => {
    test('should delete user by token', async () => {
      const response = await request(app)
        .delete('/api/v1/users')
        .set('message', "Users deleted with success")
        .send({'token' :'eyJhbGciOiJI...',
        'Authorization': 'token'});
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message');
    });
});

