const createAssociation = (key, id) => ({
  [key]: {
    connect: {
      id
    }
  }
});

module.exports = {
  createAssociation
};
