require('dotenv').config('../.env');

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ message: 'Authentification invalide !' });
    }

    const decodedToken = jwt.verify(token, `${process.env.SECRET_TOKEN}`);
    const userId = decodedToken.userId;
    req.auth = {userId};

    if (req.body.userId && req.body.userId !== userId) {
      return res.status(403).json({ message: 'User ID invalide !' });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur interne !' });
  }
};