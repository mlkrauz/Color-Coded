import db from '../config/connection.js';
import { User, Theme, Color } from '../models/index.js';
import userData from './userData.js';
import themeData from './themeData.js';
import colorData from './colorData.js';

db.once('open', async () => {
  // Delete prior entries.
  await User.deleteMany({});
  await Theme.deleteMany({});
  await Color.deleteMany({});

  // Seed each model
  await Color.insertMany(colorData);
  await Theme.insertMany(themeData);
  await User.insertMany(userData);
});
