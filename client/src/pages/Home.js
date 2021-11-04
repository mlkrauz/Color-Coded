import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <><Card className="pt-2 " border="dark" style={{ width: '18rem' }}>
      <Card.Title className="pb-3 m-4"> Welcome to Color-Coded</Card.Title>
      <Card.Text className="pb-4 mx-4">Color-Coded is a color-selecting app that helps the aesthetically challenged. Our app allows users to pick colors to create a theme, save theme in their profile, and export the themes that have been created. Using this app you too can become a master of color.   </Card.Text>
    {/* </Card><Card border="dark" style={{ width: '18rem' }}>
        <Button variant="outline-dark">Save style</Button> */}
      </Card>
    </>
  );
};

export default Home;
