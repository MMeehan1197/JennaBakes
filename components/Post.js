import { Box, Mask, Image, TapArea, Text, Flex, Tooltip} from "gestalt";
import 'gestalt/dist/gestalt.css';

export default function Post() {
    return (
        <Box padding={4} column={6} borderStyle="sm">
            <Tooltip text="View the article!">
                <TapArea 
                    role="link"
                    target="blank" 
                    href="/posts/first-post" 
                    borderStyle="sm">
                    <Flex gap={6} direction="row" justifyContent="start">
                        <Mask rounding={2} height={300} width={300}>
                            <Image
                            alt="Antelope Canyon"
                            naturalHeight={1}
                            naturalWidth={1}
                            src="https://i.ibb.co/DwYrGy6/stock14.jpg"
                            />
                        </Mask>
                        <Text>How to bake a cake!</Text>
                    </Flex>
                </TapArea>
            </Tooltip>
        </Box>
       
    );
  }