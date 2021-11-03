import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  themes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Theme',
    },
  ],
});

/**
 * Middleware which creates encrypted password prior to save.
 */
userSchema.pre('save', async function passwordHash(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 8;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

/**
 * Compare the incoming password to the encrypted password.
 */
userSchema.methods.isCorrectPassword = async (password) => bcrypt.compare(password, this.password);

const User = model('User', userSchema);

export default User;
