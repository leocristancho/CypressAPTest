const BASE_URL = 'https://reqres.in/api';

export class ReqresAPI {
  getUserById(id) {
    const url = `${BASE_URL}/users/${id}`;
    return cy.request('GET', url);
  }

  createUser(payload) {
    const url = `${BASE_URL}/users`;
    return cy.request('POST', url, payload);
  }
}