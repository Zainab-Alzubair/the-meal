/**
 * @jest-environment jsdom
 */

import { updateLikes } from '../mealsLikes.js';

describe('Meal likes counter test', () => {
  test('likes count to be 5', () => {
    const likes = [{

      likes: 3,
    }];
    expect(updateLikes(likes)).toBe('3');
  });
});