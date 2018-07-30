const { createAssociation } = require("../utils");

module.exports = {
  async createAnswer(_, args, context, info) {
    try {
      const createdAt = Date.now();
      const data = {
        data: {
          ...createAssociation("user", args.userId),
          ...createAssociation("question", args.questionId),
          video: {
            create: {
              url: "http://jejdosdka.com/dsda/adsa.mp4",
              image: {
                create: {
                  imgSmallUrl: "http://jejdosdka.com/dsda/adsa.jpg",
                  imgMediumUrl: "http://jejdosdka.com/dsda/adsa.jpg",
                  imgLargeUrl: "http://jejdosdka.com/dsda/adsa.jpg"
                }
              }
            }
          }
        }
      };

      return context.db.mutation.createAnswer(data, info);
    } catch (e) {
      console.log(e);
    }
  },

  async incrementLikesAnswer(_, args, context, info) {
    const data = {
      data: {
        likes
      },
      where: {
        id: args.answerId
      }
    };
    return context.db.mutation.updateAnswer(data, info);
  },

  async incrementViewAnswer(_, args, context, info) {
    const data = {
      data: {
        views
      },
      where: {
        id: args.answerId
      }
    };
    return context.db.mutation.updateAnswer(data, info);
  }
};
