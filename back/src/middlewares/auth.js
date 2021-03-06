const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) return res.status(401).json({ mensagem: "Informe o token" });
  if (token.toString().startsWith("Bearer ")) {
    token = token.slice(7, token.toString().length);
  }
  if (token) {
    jwt.verify(token, "mobile", (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          mensagem: "Token invalido",
        });
      } else {
        console.log(res.locals.auth_data);
        console.log(res.decoded);
        console.log(res.token);
        res.locals.auth_data = decoded;
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      mensagem: "Token não informado",
    });
  }
};
module.exports = auth;
