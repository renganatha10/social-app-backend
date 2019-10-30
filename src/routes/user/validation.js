const yup = require("yup");

const createUser = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  nickName: yup.string().required(),
  dateOfBirth: yup.date(),
  bio: yup.string(),
  coverPhoto: yup.string(),
  profilePhoto: yup.string(),
  gender: yup
    .mixed()
    .oneOf(["MALE", "FEMALE"])
    .required()
});

const updateUser = yup.object().shape({
  email: yup.string().email(),
  firstName: yup.string(),
  lastName: yup.string(),
  nickName: yup.string(),
  dateOfBirth: yup.date(),
  bio: yup.string(),
  coverPhoto: yup.string(),
  profilePhoto: yup.string(),
  gender: yup.mixed().oneOf(["MALE", "FEMALE"])
});

const followUnfollowValidation = yup.object().shape({
  followerId: yup.string().required()
});

const searchValidation = yup.string().required();

module.exports = {
  createUser,
  updateUser,
  followUnfollowValidation,
  searchValidation
};
