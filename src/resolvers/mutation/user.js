module.exports = {
  async createUser(_, args, context, info) {
    const password = await bcrypt.hash(args.password, 10);
    return context.db.mutation.createUser(
      {
        data: {
          email: args.email,
          password: password,
          firstName: args.firstName,
          lastName: args.lastName
        }
      },
      info
    );
  }
};
