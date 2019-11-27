const toobusy = require("toobusy-js");

const tooBustMiddleware = (req, res, next) => {
  if (toobusy()) {
    res.statusCode = 503;
    res.end(
      "It looks like Spectrum is very busy right now, please try again in a minute."
    );
  } else {
    next();
  }
};

module.exports = tooBustMiddleware;
