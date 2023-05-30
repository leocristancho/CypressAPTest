export class LatLongAPI {
  static baseUrl = 'https://www.latlong.net';

  static getHomePage() {
    const url = `${this.baseUrl}/`;
    return cy.request('GET', url);
  }

  static getSatellitePage() {
    const url = `${this.baseUrl}/satellite.htm`;
    return cy.request('GET', url);
  }

  static submitComment(commentname, commenttext) {
    const url = `${this.baseUrl}/_addcomment.php`;
    const payload = {
      commentname,
      commenttext,
    };
    return cy.request("POST", url, payload);
  }
}
