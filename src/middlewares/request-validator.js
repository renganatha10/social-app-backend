const requestValidator = async (
  req,
  res,
  next,
  validatorSchema,
  comparator
) => {
  try {
    if (await validatorSchema.validate(comparator)) {
      next();
    } else {
      res.status(500).send({
        message: "Validation Failed"
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = requestValidator;
