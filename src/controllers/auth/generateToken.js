const jwt = require("jsonwebtoken");

const generateToken = (req, res) => {
  const token = jwt.sign({ id: req.params.id }, process.env.JWT_SECRET, {
    expiresIn: "1y"
  });
  res.status(200).json({
    message: "Successfull Login",
    payload: {
      token,
      id: req.params.id
    }
  });
};

module.exports = generateToken;
