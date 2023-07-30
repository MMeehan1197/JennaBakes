import { Flex, Image, SegmentedControl, Box, Column, Text} from "gestalt";
import 'gestalt/dist/gestalt.css';
import React from "react";
import Post from "./Post";
import HomePage from "./HomePage";

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
      <Flex direction="column" alignContent="center" gap={{ column: 2, row: 0 }}>
        <Flex height={100} direction="row" alignContent="center" justifyContent="center">
          <Box column={2}>
            <Image priority
                    src="/images/JennaBakesLogo.png"
                    alt=""
                    naturalHeight={1}
                    naturalWidth={1}/>
          </Box>
        </Flex>
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