import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <><Card border="dark" style={{ width: '18rem' }}>
      <Card.Title> Welcome to Color-Coded</Card.Title>
      <Card.Text>Color-Coded is a color selcting app that helps the aesthetically challenged. Our app allows users to pick colors to create a theme, save said theme in their profile, and export the themes that have been created. Using this app you too can become a master of color.   </Card.Text>
    </Card><Card border="dark" style={{ width: '18rem' }}>
        <Button variant="outline-dark">Save style</Button>
      </Card>
    </>
  );
};

export default Home;
