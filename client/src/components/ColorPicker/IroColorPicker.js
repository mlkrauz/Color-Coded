import React, { useState, useEffect, useRef } from 'react';
import iro from '@jaames/iro';

const IroColorPicker = ({ newColor, onChangeCallback }) => {
  // useRef binds data to an HTML element from what I understand.
  const ref = useRef(null);
  const colorPickerRef = useRef(null);

  // Because we have passed 0 dependencies to useEffect, this will only render once!
  // Exactly what we want.
  useEffect(() => {
    // We only want to create a single color picker.
    const iroSettings = {
      // Set the size of the color picker
      width: 180,
      color: '#FFFFFF', //{h: 360, s: 0, v: 100},
      layout: [
        { 
          component: iro.ui.Wheel,
        },
        { 
          component: iro.ui.Slider,
          options: {
            sliderType: 'hue'
          },
        },
        { 
          component: iro.ui.Slider,
          options: {
            sliderType: 'saturation'
          }
        },
        { 
          component: iro.ui.Slider,
          options: {
            sliderType: 'value'
          }
        },
      ]
    };

    // Create iro color picker and assign to reference
    colorPickerRef.current = 
      new iro.ColorPicker(ref.current, {
        ...iroSettings
      }
    )

    // Using iro's inbuilt .on function, we can send the updated color string to the parent's state.
    colorPickerRef.current.on('color:change', (newColor) => onChangeCallback(newColor.hexString))
  }, [])

  // We can create a second useEffect to update the iro color picker when we want to render a new color.
  useEffect(() => {
    colorPickerRef.current.color.hexString = newColor;
  }, [newColor])

  // Return an empty <div> with our iro color picker bound to it.
  return (
    <div ref={ref}></div>
  )
}

export default IroColorPicker;
