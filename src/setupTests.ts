// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

export const mockContextValue = {
  listsObj: {},
  listsShown: [],
  listItemsShown: jest.fn(),
  showListItems: jest.fn(),
  hideListItems: jest.fn(),
  listShown: jest.fn(),
  showList: jest.fn(),
  hideList: jest.fn(),
  addItemAsObj: jest.fn(),
  addListAsObj: jest.fn(),
  listAdded: jest.fn(),
  removeItemAsObj: jest.fn(),
  removeListAsObj: jest.fn(),
  resetListAsObj: jest.fn(),
  updateAsObj: jest.fn(),
  packAllItemsAsObj: jest.fn(),
  unpackAllItemsAsObj: jest.fn(),
};
