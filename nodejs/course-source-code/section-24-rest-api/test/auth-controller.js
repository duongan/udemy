const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');

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

  it('should send a response with a valid user status for an existing user', function (done) {
    mongoose
      .connect(
        'mongodb+srv://andt_learning:F5zDpHO6ZROiSZUT@cluster0.l89rk.mongodb.net/test-messages?retryWrites=true&w=majority'
      )
      .then(() => {
        const user = new User({
          email: 'test@test.com',
          password: '123456',
          name: 'Test',
          posts: [],
        });
        return user.save();
      })
      .then(() => {})
      .catch((err) => console.log(err));
  });
});
