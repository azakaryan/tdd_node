const superTest = require('supertest');
const app = require('../app');
const request = superTest(app);

it('create user', async () => {
  try {
    const data = await request
      .post('/users')
      .send({ name: 'User 1', email: 'user-email', password: 'root' })
      .set('Accept', 'application/json');
    expect(data.status).toEqual(201);
  } catch (e) {
    expect(e).toMatch('error');
  }
});

it('get users', (done) => {
  request.get('/users').expect(200, done);
});

it('get user by id', (done) => {
  request.get('/users/1').expect(200, done);
});
