const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');

const AuthController = require('../controllers/auth');

describe('Auth Controller', function () {
  before(function (done) {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        const user = new User({
          email: 'test@test.com',
          password: '123456',
          name: 'Test',
          posts: [],
          _id: '6315907b1c72c061bd2f5e11',
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

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
      try {
        expect(result).to.be.an('error');
        expect(result).to.have.property('statusCode', 500);
        done();
      } catch (error) {
        done(error);
      }
    });

    User.findOne.restore();

    // Case: No using "done"
    // return AuthController.login(req, {}, () => {}).then((result) => {
    //   expect(result).to.be.an('error');
    //   expect(result).to.have.property('statusCode', 500);
    //   User.findOne.restore();
    // });
  });

  it('should send a response with a valid user status for an existing user', function (done) {
    const req = { userId: '6315907b1c72c061bd2f5e11' };
    const res = {
      statusCode: 500,
      userStatus: null,
      status: function (statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      json: function (data) {
        this.userStatus = data.status;
      },
    };
    AuthController.getUserStatus(req, res, () => {}).then(() => {
      try {
        expect(res.statusCode).to.equal(200);
        expect(res.userStatus).to.equal('I am new!');
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  after(function (done) {
    User.deleteMany().then(() => {
      mongoose.disconnect();
      done();
    });
  });
});
