const jwt = require("jsonwebtoken");
const checkLogin = async (req, res, next) => {
  const token = await req.signedCookies.access_token;
  if (!token) return res.send("error logging in");
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.send("Forbidden");

    req.user = user;

    next();
  });
};
module.exports = checkLogin;
