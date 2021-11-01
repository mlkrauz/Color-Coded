import mongoose from 'mongoose';

/**
 * Note: mongoose 6 always assumes useNewUrlParser, useUnifiedTopology,
 * and useCreateIndex are true; useFindAndModify is always assumed false.
 * We can omit them from the mongoose options args.
 */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/color-coded');

const db = mongoose.connection;

export default db;
