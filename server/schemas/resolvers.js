import { AuthenticationError } from 'apollo-server-express';
import { User, Theme, Color } from '../models/index.js';
import { signToken } from '../utils/auth.js';

/**
 * @param {Any} args - Object containing args.
 */
const filterIdFromArgs = (args) => {
  // Convert to an array of [key, value] pairs. Remove Id. Convert back to Object.
  const keyValuesArray = Object.entries(args);
  const filteredArray = keyValuesArray.filter((keyValuePair) => keyValuePair[0] !== 'id');

  return Object.fromEntries(filteredArray);
};

const allColorFields = '_id color shade tint shadeEnabled tintEnabled';

const allThemeFields = [
  { path: '_id' },
  { path: 'name' },
  { path: 'locked' },
  { path: 'primary', populate: allColorFields },
  { path: 'backgrounds', populate: allColorFields },
  { path: 'accents', populate: allColorFields },
  { path: 'typefaces', populate: allColorFields },
  { path: 'hyperlink_unclicked', populate: allColorFields },
  { path: 'hyperlink_clicked', populate: allColorFields },
];

const resolvers = {
  Query: {
    users: async () => {
      const results = User.find({})
        .populate({
          path: 'themes',
          populate: allThemeFields,
        });

      return results;
    },
    user: async (parent, args) => {
      const results = User.findById(args.id)
        .populate({
          path: 'themes',
          populate: allThemeFields,
        });

      return results;
    },
    themes: async () => {
      const results = Theme.find({})
        .populate(allThemeFields);

      return results;
    },
    theme: async (parent, args) => {
      const results = Theme.findById(args.id)
        .populate(allThemeFields);

      return results;
    },
    colors: async () => Color.find({}),
    color: async (parent, args) => Color.findById(args.id),
  },
  Mutation: {
    addColor: async (parent, args) => Color.create(args),
    changeColor: async (parent, { id, color }) => {
      await Color.updateOne({ _id: id }, { color });

      return Color.findById(id);
    },

    // Let mongoose do the error handling. Using args instead of destructuring all args.
    addTheme: async (parent, args) => Theme.create(args),
    updateTheme: async (parent, args) => {
      const filteredArgs = filterIdFromArgs(args);

      await Theme.updateOne({ id: args.id }, { ...filteredArgs });

      return Theme.findById(args.id)
        .populate(allThemeFields);
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addThemeToUser: async (parent, { userId, themeId }) => {
      const theUser = await User.findById(userId);

      if (!theUser.themes.includes(themeId)) {
        await User.updateOne({ _id: userId }, { themes: [...theUser.themes, themeId] });
      }

      return User.findById(userId)
        .populate({
          path: 'themes',
          populate: allThemeFields,
        });
    },
    removeThemeFromUser: async (parent, { userId, themeId }) => {
      const theUser = await User.findById(userId);

      // Filter out theme to remove
      const filteredThemes = theUser.themes.filter((themeRef) => themeRef.toString() !== themeId);
      await User.updateOne({ _id: userId }, { themes: filteredThemes });

      return User.findById(userId)
        .populate({
          path: 'themes',
          populate: allThemeFields,
        });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials1');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials2');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

export default resolvers;
