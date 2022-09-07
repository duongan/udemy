const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');
const io = require('../socket');

const User = require('../models/user');

const FeedController = require('../controllers/feed');

describe('Feed Controller', function () {
  before(function (done) {
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
          _id: '6315907b1c72c061bd2f5e11',
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  it('should add a created post to the posts of the creator', function (done) {
    sinon.stub(io, 'getIO');
    io.getIO.returns({ emit: function () {} });

    const req = {
      body: {
        title: 'A test title',
        content: 'A test content',
      },
      file: {
        path: 'path',
      },
      userId: '6315907b1c72c061bd2f5e11',
    };

    const res = {
      status: function () {
        return this;
      },
      json: function () {},
    };

    FeedController.createPost(req, res, () => {}).then((savedUser) => {
      try {
        expect(savedUser).to.have.property('posts');
        expect(savedUser.posts).to.have.length(1);
        done();
      } catch (error) {
        done(error);
      }
      io.getIO.restore();
    });
  });

  after(function (done) {
    User.deleteMany().then(() => {
      mongoose.disconnect();
      done();
    });
  });
});
