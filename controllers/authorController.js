const db = require('../db');

//controller function to retrive an author by Id
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const getAuthorById = async (req, res, next) => {
  try {
    const { authorId } = req.params;
    if (isNaN(Number(authorId))) {
      throw new CustomNotFoundError('Invalid author ID');
    }
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      throw new CustomNotFoundError('Author not found');
    }

    res.send(`Author Name: ${author.name}`);
  } catch (error) {
    next(error); // Pass error to error middleware
  }
};

module.exports = { getAuthorById };
