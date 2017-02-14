const expect = require('chai').expect;
const user = require('../users/userEntity');

describe("testing the user entity validations", function() {
  it("should be invalid if the name is empty", function(done) {
    let u = new user();
    u.validate(function(err) {
      expect(err.errors.name).to.exist;
      done();
    });
  });
  it("should be invalid if the password is empty", function(done) {
    let u = new user();
    u.validate(function(err) {
      expect(err.errors.password).to.exist;
      done();
    });
  });
});
