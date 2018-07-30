const { createAssociation } = require("../utils");

module.exports = {
  async createQuestion(_, args, context, info) {
    const data = {
      data: {
        title: args.title,
        ...createAssociation("user", args.userId)
      }
    };

    return context.db.mutation.createQuestion(data, info);
  }
};
