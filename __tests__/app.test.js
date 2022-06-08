const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/books should return a list of books with their author', async () => {
    const res = await request(app).get('/books');
    expect(res.body).toEqual(books);
  });
  afterAll(() => {
    pool.end();
  });
});
