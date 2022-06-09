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
    expect(res.body).toEqual([
      {
        id: '1',
        title: 'Anxious People',
        author: 'Fredrik Backman',
      },
      {
        id: '2',
        title: 'The Giver of Stars',
        author: 'Jojo Moyes',
      },
      {
        id: '3',
        title: 'Seven Days in June',
        author: 'Tia Williams',
      },
      {
        id: '4',
        title: 'The WIcked Sister',
        author: 'Karen Dionne',
      },
      {
        id: '5',
        title: 'Year of Yes',
        author: 'Shonda Rhimes',
      },
      {
        id: '6',
        title: 'The Scent Keeper',
        author: 'Erica Bauermeister',
      },
      {
        id: '7',
        title: 'This is How it Always is',
        author: 'Laurie Frankel',
      },
      {
        id: '8',
        title: 'Me Before You',
        author: 'Jojo Moyes',
      },
      {
        id: '9',
        title: 'The Last Letter from Your Lover',
        author: 'Jojo Moyes',
      },
      {
        id: '10',
        title: 'It Ends with Us',
        author: 'Colleen Hoover',
      },
      {
        id: '11',
        title:
          'Confident Women: Swindlers, Grifters, and Shapeshifters of the Feminine Persuasion',
        author: ' Tori Telfer',
      },
      {
        id: '12',
        title: 'Malibu Rising',
        author: 'Taylor Jenkins Reid',
      },
      {
        id: '13',
        title: 'Call Us What We Carry',
        author: 'Amanda Gorman',
      },
      {
        id: '14',
        title: 'Daisy Jones & The Six',
        author: 'Taylor Jenkins Reid',
      },
      {
        id: '15',
        title: 'The Other Black Girl',
        author: 'Zakiya Dalila Harris',
      },
    ]);
  });
  it('/book/12 returns details of Malibu Rising', async () => {
    const res = await request(app).get('/books/12');
    const expected = {
      id: '12',
      title: 'Malibu Rising',
      author: 'Taylor Jenkins Reid',
      finished: false,
      published: 2021,
      genre: 'historical fiction',
    };
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
