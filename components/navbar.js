import { Flex, Icon, SegmentedControl, Box, Text, Heading} from "gestalt";
import 'gestalt/dist/gestalt.css';
import React from "react";
import HomePage from "./HomePage";
import Post from "./Post";

export default function NavBarJenna() {
    const [itemIndex, setItemIndex] = React.useState(0);
  
    const items = [
      'Home',
      'About',
      'Blog',
      'Contact',
    ];
  
    const content = [
      <HomePage/>,
      'Here I will tell you about me I have been baking since I was a little girl with my mom. She taught me everything I need to know about measuring, mixing, combining, oven use and more.',
      <Post/>, 
      'Contact content',
    ];
  
    return (
      <Flex direction="column" gap={{ column: 2, row: 0 }}>
        <Heading align="center" color="dark">Jenna Meehan Bakes!</Heading>
        <SegmentedControl
          items={items}
          selectedItemIndex={itemIndex}
          onChange={({ activeIndex }) => setItemIndex(activeIndex)}
        />
  
        <Box borderStyle="shadow" padding={6} rounding={4} color="light">
          {content[itemIndex]}
        </Box>
      </Flex>
    );
  }