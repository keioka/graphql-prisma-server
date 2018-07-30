const bcrypt = require("bcryptjs");
const axios = require("axios");
const { forwardTo } = require("prisma-binding");
const { createAssociation } = require("./utils");
const mutationQuestion = require("./mutation/question");
const mutationComment = require("./mutation/comment");
const mutationAnswer = require("./mutation/answer");
const mutationUser = require("./mutation/user");

const resolvers = {
  Query: {
    me(_, args, context, info) {
      // const id = getUserId(context);
      // return context.db.query.user({ where: { id } }, info)
    },
    feeds(_, args, context, info) {
      return context.db.query.feeds;
    },
    users: forwardTo("db"),
    user(_, { id }, context, info) {
      return context.db.query.user(
        {
          where: {
            id
          }
        },
        info
      );
    },
    questions: forwardTo("db"),
    videos: forwardTo("db"),
    video(root, { id }) {
      return videos.find(video => video.id === id);
    },
    comments: forwardTo("db")
  },
  Mutation: {
    ...mutationUser,
    ...mutationComment,
    ...mutationQuestion,
    ...mutationAnswer
  }
};

module.exports = resolvers;
