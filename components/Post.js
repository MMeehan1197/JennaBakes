import { Box, Mask, Image, TapArea, Text, Flex, Tooltip, Column, Heading} from "gestalt";
import 'gestalt/dist/gestalt.css';

export default function Post() {
    return (
        <Box padding={4} column={6} borderStyle="sm" rounding={4} margin={4}>
            <Tooltip text="View the article!">
                <TapArea 
                    role="link"
                    target="blank" 
                    href="/posts/first-post" 
                    borderStyle="sm">
                    <Flex direction="row" justifyContent="start">
                        <Column span={4}>
                            <Mask rounding={2}>
                                <Image
                                alt="Antelope Canyon"
                                naturalHeight={1}
                                naturalWidth={1}
                                src="https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg"
                                />
                            </Mask>
                        </Column>
                        <Box marginStart={6}>
                            <Heading>How to bake a cake!</Heading>
                            <Text>In this article, I am going to teach you how to bake a cake</Text>
                        </Box>
                        
                    </Flex>
                </TapArea>
            </Tooltip>
        </Box>
       
    );
  }