import React from "react";

import Card from 'react-bootstrap/Card';
import ColorCard from '../components/ColorCard.js';

const Home = () => {
  return (
    <ColorCard title='Welcome to Color-Coded!'>
      <Card className="my-5" border="dark" style={{ width: '36rem' }}>
        <Card.Text className="py-5 px-5">
          Color-Coded is a color-selecting app that helps the aesthetically challenged.
          Our app allows users to pick colors to create a theme, save theme in their profile, and export the themes that have been created.
          Using this app you too can become a master of color!
        </Card.Text>
      </Card>
    </ColorCard>
  );
};

export default Home;
