import { Flex, Icon, SegmentedControl, Box, Text} from "gestalt";
import 'gestalt/dist/gestalt.css';
import React from "react";
import HomePage from "./homepage";

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
      'You content',
      'Messages content',
      'Pins content',
    ];
  
    return (
      <Flex direction="column" gap={{ column: 1, row: 0 }}>
        <SegmentedControl
          items={items}
          selectedItemIndex={itemIndex}
          onChange={({ activeIndex }) => setItemIndex(activeIndex)}
        />
  
        <Box borderStyle="shadow" padding={6} rounding={2}>
          <Text>{content[itemIndex]}</Text>
        </Box>
      </Flex>
    );
  }