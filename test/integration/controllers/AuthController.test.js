var request = require('supertest');
describe('AuthController', function() {
  describe('index', function() {
    it('should return 201', function (done) {
      request(sails.hooks.http.app)
        .post('/auth/register').
        send({email: 'uuu@hgh.com',password:'123',confirmPjassword:'123'})
        .expect(201, done);
    });
  });
});
describe('AuthController', function() {
  describe('index', function() {
    it('should return 200', function (done) {
      request(sails.hooks.http.app)
        .post('/auth/authenticate').
        send({email: 'uuu@hgh.com',password:'123'})
        .expect(200, done);
    });
  });
});