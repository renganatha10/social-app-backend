const yup = require("yup");

const createPostValidation = yup.object().shape({
  text: yup.string().required(),
  videoUrl: yup.string().required(),
  photoUrl: yup.string().required()
});

const createCommentValidation = yup.object().shape({
  text: yup.string().required()
});

const editPostValidation = yup.object().shape({
  text: yup.string(),
  videoUrl: yup.string(),
  photoUrl: yup.string()
});

const editCommentValidation = yup.object().shape({
  text: yup.string()
});

const likeUnlikeValidation = yup.string().required();

module.exports = {
  createPostValidation,
  createCommentValidation,
  likeUnlikeValidation,
  editPostValidation,
  editCommentValidation
};
