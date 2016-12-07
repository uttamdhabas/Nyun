var request = require('supertest');
describe('UserController', function() {
  describe('index', function() {
    it('should return 200', function (done) {
      request(sails.hooks.http.app)
        .get('/')
        .expect(200, done);
    });
  });
});
describe('UserController', function() {
  describe('get', function() {
    it('should return 404', function (done) {
      request(sails.hooks.http.app)
        .get('/user')
        .expect(404, done);
    });
  });
});
describe('UserController', function() {
  describe('create', function() {
    it('should return 301', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .expect(301, done);
    });
  });
});
describe('UserController', function() {
  describe('delete', function() {
    it('should return 403', function (done) {
      request(sails.hooks.http.app)
        .put('/user')
        .expect(404, done);
    });
  });
});
