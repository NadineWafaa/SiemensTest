const request = require('supertest');
const app = require('../mock-user-auth'); 

describe('Authenticate user API', () => {
  test('should authenticate', async () => {
    const response = await request(app)
      .post('/api/v1/auth')
      .set('Authorization', 'eyJhbGciOiJI...')
      .send({ "email": "user@gmail.com",
      "password": "user123"});

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  test('something wrong with authentication', async () => {
    const response = await request(app)
      .post('/api/v1/auth')
      .set('Authorization', 'eyJhbGciOiJI...')
      .send({ "email": "user@gmail.com",
      "password": "user123" });

    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty('token');
  });

  test('authenticate with wrong body', async () => {
    const response = await request(app)
      .post('/api/v1/auth')
      .set('Authorization', 'eyJhbGciOiJI...')
      .send({ "email": "user@gmail.com",
      "password": "user12" });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('token');
  });

});

