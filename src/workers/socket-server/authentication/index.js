const jwt = require("jsonwebtoken");

const vertifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, "SECRET", err => {
      if (err) {
        reject(err);
      } else {
        resolve("Token Verified");
      }
    });
  });

const authentication = async token => {
  if (token) {
    try {
      await vertifyToken(token);
      const { id } = jwt.decode(token);
      return id;
    } catch (err) {
      return null;
    }
  } else {
    return "No Token Provided";
  }
};

module.exports = authentication;
