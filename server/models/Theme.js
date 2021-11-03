import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const themeSchema = new Schema({
  name: {
    type: String,
    default: 'My Theme',
  },
  locked: {
    type: Boolean,
    default: false,
  },
  primary: {
    type: Schema.Types.ObjectId,
    ref: 'Color',
    required: true,
  },
  backgrounds: [{
    type: Schema.Types.ObjectId,
    ref: 'Color',
  }],
  accents: [{
    type: Schema.Types.ObjectId,
    ref: 'Color',
  }],
  typefaces: [{
    type: Schema.Types.ObjectId,
    ref: 'Color',
  }],
  hyperlink_unclicked: {
    type: Schema.Types.ObjectId,
    ref: 'Color',
  },
  hyperlink_clicked: {
    type: Schema.Types.ObjectId,
    ref: 'Color',
  },
});

/**
 * A virtual function which gets all colors owned by the Theme.
 */
themeSchema.virtual('allColors').get(() => [
  this.primary,
  ...this.backgrounds,
  ...this.accents,
  ...this.typefaces,
  this.hyperlink_clicked,
  this.hyperlink_unclicked,
]);

const Theme = model('Theme', themeSchema);

export default Theme;
