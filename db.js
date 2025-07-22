const authors = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Jane',
  },
  {
    id: 3,
    name: 'Dylan',
  },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

module.exports = {
  getAuthorById,
  authors,
};
