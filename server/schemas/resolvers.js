import { User, Theme, Color } from '../models/index.js';

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
          populate: 'primary backgrounds accents typefaces hyperlink.unclicked hyperlink.clicked',
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
          populate: 'primary backgrounds accents typefaces hyperlink.unclicked hyperlink.clicked',
        });
    },
    themes: async () => {
      Theme.find({})
        .populate({
          populate: 'primary backgrounds accents typefaces hyperlink.unclicked hyperlink.clicked',
        });
    },
    theme: async (parent, args) => {
      Theme.findById(args.id)
        .populate({
          populate: 'primary backgrounds accents typefaces hyperlink.unclicked hyperlink.clicked',
        });
    },
    colors: async () => Color.find({}),
    color: async (parent, args) => Color.findById(args.id),
  },
};

export default resolvers;
