import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const colorSchema = new Schema({
  color: {
    type: String,
    required: true,
    match: [/^#?([a-f0-9]{6})$/, 'Must match a 6-digit hex value.'],
  },
});

/**
 * This virtual function which calculates the RGB complement of the color.
 */
colorSchema.virtual('complement').get(() => {
  /**
   * Get the RGB components of the hex value.
   * We must also append a 0x in the front to signify a hex number.
   */
  const colorStrings = [
    `0x${this.color.substring(1, 3)}`,
    `0x${this.color.substring(3, 5)}`,
    `0x${this.color.substring(5)}`,
  ];

  // For each component, get the compliment.
  const colorComplements = colorStrings.map((colorString) => {
    // Cast to a number.
    const colorNum = Number(colorString);

    // Get the compliment by subtracting the hex value from FF, the highest hex value possible.
    const colorComplement = (Number('FF', 16) - colorNum);

    // Cast back to a string and return.
    return colorComplement.toString();
  });

  // Combine each component and return.
  return `#${colorComplements[0]}${colorComplements[1]}${colorComplements[2]}`;
});

const Color = model('Color', colorSchema);

export default Color;
