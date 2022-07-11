const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/* const fs = require('fs'); */

require('dotenv').config('../.env');

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: `${process.env.MYSQL_HOST}`,
  user: `${process.env.MYSQL_USER}`,
  password: `${process.env.MYSQL_PASSWORD}`,
  database: `${process.env.MYSQL_DATABASE}`
});

connection.connect(function (error) {
  if (error) {
    console.error('Connexion MySQL échouée: ' + error.stack);
    return;
  }
  console.error('Connexion MySQL réussie sur le service USERS !')
});

const RegisterUser = require('../types/registerUser');
const LoginUser = require('../types/loginUser ');

exports.registerUser = async (req, res) => {
  try {
    const newUser = new RegisterUser(req.body);

    connection.query(`SELECT * FROM users WHERE email = (?)`, [newUser.email], async function (_error, results, _fields) {
      if (results.length == 1) {
        return res.status(409).json({ message: 'Un compte existe déjà avec cet email !' });
      }
      else if (req.body.lastname == '') {
        throw res.status(400).json({ message: 'Nom requis !' });
      }
      else if (req.body.firstname == '') {
        throw res.status(400).json({ message: 'Prénom requis !' });
      }
      else if (req.body.confirm_password == '' || req.body.password == '') {
        throw res.status(400).json({ message: 'Mot de passe requis !' });
      }
      else if (req.body.confirm_password !== req.body.password) {
        throw res.status(400).json({ message: 'Les mots de passe doivent être identiques !' });
      } else {
        const hash = await bcrypt.hash(newUser.password, 10);
        connection.query(`INSERT INTO users (lastname, firstname, email, password) VALUES (?,?,?,?)`, [newUser.lastname, newUser.firstname, newUser.email, hash]);
        return res.status(201).json({ message: 'Inscription réussie !' });
      }
    });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur interne !' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = new LoginUser(req.body);

    connection.query(`SELECT * FROM users WHERE email = (?)`, [user.email], function (_error, results, _fields) {
      if (results.length !== 1) {
        return res.status(404).json({ message: 'Aucun compte n\'existe avec cet email !' });
      }

      bcrypt.compare(user.password, results[0].password).then((valid) => {
        if (!valid) {
          return res.status(401).json({ message: 'Mot de passe incorrect !' });
        }
        return res.status(200).json({
          userId: results[0]._id,
          token: jwt.sign(
            { userId: results[0]._id },
            `${process.env.SECRET_TOKEN}`,
            { expiresIn: '12h' }
          )
        });
      });
    });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur interne !' });
  }
};

/* exports.updateOneProfilUser = async (req, res) => {
  try {
    let userId = req.params.id;
    const user = new UpdateProfilUser(req.body);

    connection.query(`UPDATE user SET lastName = (?), firstName = (?) WHERE _id = (?)`, [user.lastName, user.firstName, userId]);
    return res.status(200).json({ message: 'Profil mis à jour !' });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur interne !' });
  }
};

exports.updateOnePasswordUser = async (req, res) => {
  try {
    let userId = req.params.id;
    const user = new UpdatePasswordUser(req.body);

    if (user.confirmPassword !== user.password) {
      throw res.status(409).json({ message: 'Les mots de passe doivent être identiques !' });
    } else {
      const hash = await bcrypt.hash(user.password, 10);
      connection.query(`UPDATE user SET password = (?) WHERE _id = (?)`, [hash, userId]);
      return res.status(200).json({ message: ' Mot de passe mis à jour !' });
    }
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur interne !' });
  }
};

exports.getOneProfilUser = async (req, res) => {
  try {
    let userId = req.params.id;

    connection.query(`SELECT * FROM user WHERE _id = (?)`, [userId], function (_error, results, _fields) {
      if (results.length !== 1) {
        throw res.status(404).json({ message: 'Aucun compte n\'existe avec cet id !' });
      }
      return res.status(200).json([{
        userId: results[0]._id,
        lastName: results[0].lastName,
        firstName: results[0].firstName,
        email: results[0].email,
        role: results[0].role_id
      }]);
    });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur interne !' });
  }
};

exports.deleteOneUser = async (req, res) => {
  try {
    const userId = req.params.id;

    connection.query(`SELECT file FROM posts WHERE userId = (?)`, [userId], function (_error, results, _fields) {
      for (i = 0; i < results.length; i++) {
        fs.unlink(`images/${results[i].file.split('/images/')[1]}`, async () => {
        });
      }
      connection.query(`DELETE FROM comments WHERE userId = (?)`, [userId]);
      connection.query(`DELETE FROM posts WHERE userId = (?)`, [userId]);
      connection.query(`DELETE FROM user WHERE _id = (?)`, [userId]);
      return res.status(200).json({ message: 'Compte utilisateur et son contenu supprimés !' });
    });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur interne !' });
  }
}; */