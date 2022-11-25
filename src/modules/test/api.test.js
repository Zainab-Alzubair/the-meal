/**
 * @jest-environment jsdom
 */

import request from 'supertest';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
describe('get Meals Data', () => {
  test('should return 200 status', () => {
    /* eslint-disable */
    async () => {
      const response = await
      request(baseUrl)
        .get('?f=d');
      expect(response.statusCode).toBe(200);
    };
  });
  test('should return 400 status', () => {
       /* eslint-disable */
    async () => {
      const response = await request(baseUrl).get('/?meal');
      expect(response.statusCode).toBe(400);
    };
  });
});
