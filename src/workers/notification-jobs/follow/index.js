const { db } = require("../../../models");
const emailTranporter = require("../../../utils/email");

const sendEmailNotificationOnFollow = async (job, done) => {
  const { followerId, userId } = job.data;

  const user = await db.User.findByPk(userId);
  const follower = await db.Follower.findByPk(followerId);

  await emailTranporter.sendMail({
    from: "renganatha10@gmail.com",
    to: user.email,
    subject: "New Follower ! 👏",
    text: `${follower.name} has followed You`,
    html: `<b>${follower.name}</b> has followed You`
  });

  done();
};

module.exports = sendEmailNotificationOnFollow;
