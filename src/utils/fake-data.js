const faker = require("faker");
const { uniqBy } = require("lodash");

const fakeUsers = [];
const posts = [];
const comments = [];
const userFollowings = [];
const postLikes = [];

for (let index = 0; index < 1000; index++) {
  fakeUsers.push({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    nickName: faker.name.firstName(),
    gender: "MALE",
    bio: faker.name.jobDescriptor(),
    dateOfBirth: faker.date.past(18),
    createdAt: new Date(),
    updatedAt: new Date(),
    profilePhoto: faker.image.avatar(),
    coverPhoto: faker.image.technics()
  });
}

const userUniqByEmail = uniqBy(fakeUsers, o => o.email);
const users = uniqBy(userUniqByEmail, o => o.nickName);

for (let index = 0; index < 100000; index++) {
  posts.push({
    id: faker.random.uuid(),
    text: faker.lorem.lines(2),
    photoUrl: faker.image.transport(),
    userId: users[Math.floor(Math.random() * (users.length - 1)) + 0].id,
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

for (let index = 0; index < 100000; index++) {
  comments.push({
    id: faker.random.uuid(),
    text: faker.lorem.lines(1),
    postId: posts[Math.floor(Math.random() * (posts.length - 1)) + 0].id,
    userId: users[Math.floor(Math.random() * (users.length - 1)) + 0].id,
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

users.forEach(item => {
  postLikes.push({
    id: faker.random.uuid(),
    userId: item.id,
    postId: posts[Math.floor(Math.random() * (posts.length - 1)) + 0].id,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const randomUserId =
    users[Math.floor(Math.random() * (users.length - 1)) + 0].id;

  if (randomUserId !== item.id) {
    userFollowings.push({
      id: faker.random.uuid(),
      userId: item.id,
      followerId: randomUserId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
});

module.exports = {
  users,
  posts,
  comments,
  postLikes,
  userFollowings
};
