import { Box, Mask, Image, TapArea, Text, Flex, Tooltip, Button, Heading, Letterbox} from "gestalt";
import 'gestalt/dist/gestalt.css';

export default function ImagePost() {
    return (
        <Box column={3} margin={4} rounding={8} borderStyle="sm">
            <Tooltip text="View the article!">
                <TapArea 
                    role="link"
                    target="blank" 
                    href="/posts/first-post">
                            <Mask rounding={8}>
                                    <Image
                                    alt="Antelope Canyon"
                                    naturalHeight={1}
                                    naturalWidth={1}
                                    src="https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg"
                                    >
                                        <Box height="100%" padding={3}>
                                            <Flex direction="column" height="100%" justifyContent="end" alignContent="end">
                                                <Button color="white" onClick={() => alert('Click!')} text="Bake a cake" />
                                            </Flex>
                                        </Box>
                                    </Image>
                            </Mask>
                </TapArea>
            </Tooltip>
        </Box>
       
    );
  }