const { expect } = require('chai');
const sinon = require('sinon');

const User = require('../models/user');

const AuthController = require('../controllers/auth');

describe('Auth Controller - Login', function () {
  it('should throw an error with code 500 if accessing the database fails', function (done) {
    sinon.stub(User, 'findOne');
    User.findOne.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: '123456',
      },
    };

    AuthController.login(req, {}, () => {}).then((result) => {
      console.log(result);
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 501);
      done();
    });

    User.findOne.restore();
  });
});
