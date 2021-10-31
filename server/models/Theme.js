import { Schema, model } from 'mongoose';

const themeSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: 'My Theme',
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
  hyperlink: {
    unclicked: {
      type: Schema.Types.ObjectId,
      ref: 'Color',
    },
    clicked: {
      type: Schema.Types.ObjectId,
      ref: 'Color',
    },
  },
});

const Theme = model('Theme', themeSchema);

export default Theme;
