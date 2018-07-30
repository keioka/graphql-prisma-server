const { createAssociation } = require("../utils");

module.exports = {
  async createComment(_, args, context, info) {
    const data = {
      data: {
        content: args.content,
        ...createAssociation("userCommenBy", args.userId),
        ...createAssociation("answer", args.answerId)
      }
    };

    return context.db.mutation.createComment(data, info);
  }
};
