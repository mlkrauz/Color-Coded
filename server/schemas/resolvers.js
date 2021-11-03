import { User, Theme, Color } from '../models/index.js';

/**
 * @param {Any|Object} argsToBeFiltered - Single arg or object of args to be filtered out.
 * @param {Any} args - Rest of the args to be checked.
 */
const filterArgs = (argsToBeFiltered, ...args) => {
  // We don't know if a single arg is being filtered, or an object with many.
  const arrayOfArgsToFilter = [...argsToBeFiltered];

  const filterCallback = (arg) => !arrayOfArgsToFilter.includes(arg);

  return args.filter(filterCallback);
};

const resolvers = {
  Query: {
    users: async () => {
      User.find({})
        .populate({
          path: 'themes',
          perDocumentLimit: 10, // This will ensure only the first 10 themes are loaded, per user.
        })
        .populate({
          path: 'themes',
          populate: 'primary backgrounds accents typefaces hyperlink_unclicked hyperlink_clicked',
        });
    },
    user: async (parent, args) => {
      User.findById(args.id)
        .populate({
          path: 'themes',
          perDocumentLimit: 10, // This will ensure only the first 10 themes are loaded, per user.
        })
        .populate({
          path: 'themes',
          populate: 'primary backgrounds accents typefaces hyperlink_unclicked hyperlink_clicked',
        });
    },
    themes: async () => {
      Theme.find({})
        .populate({
          populate: 'primary backgrounds accents typefaces hyperlink_unclicked hyperlink_clicked',
        });
    },
    theme: async (parent, args) => {
      Theme.findById(args.id)
        .populate({
          populate: 'primary backgrounds accents typefaces hyperlink_unclicked hyperlink_clicked',
        });
    },
    colors: async () => Color.find({}),
    color: async (parent, args) => Color.findById(args.id),
  },
  Mutation: {
    addColor: async (parent, { color }) => Color.create(color),
    changeColor: async (parent, { id, color }) => Color.updateOne({ _id: id }, { color }),

    // Let mongoose do the error handling. Using args instead of destructuring all args.
    addTheme: async (parent, args) => Color.create(...args),
    updateTheme: async (parent, args) => {
      const filteredArgs = filterArgs(args);

      Color.updateOne({ id: args.id }, { ...filteredArgs });
    },

    addThemeToUser: async (parent, { userId, themeId }) => {
      const theUser = await User.findById(userId);

      return User.updateOne({ _id: userId }, { themes: [...theUser.themes, themeId] });
    },
    removeThemeFromUser: async (parent, { userId, themeId }) => {
      const theUser = await User.findById(userId);

      // Filter out theme to remove
      const filteredThemes = theUser.themes.filter((themeRef) => themeRef !== themeId);

      // Delete theme
      await Theme.findOneAndRemove({ _id: themeId });

      return User.updateOne({ _id: userId }, { themes: filteredThemes });
    },
  },
};

export default resolvers;
