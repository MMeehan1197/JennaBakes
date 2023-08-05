import utilStyles from "../styles/utils.module.css";
import { Flex, Box, Image } from "gestalt";
import 'gestalt/dist/gestalt.css';


export default function About() {
    return (<>
        <Flex direction="column">
          <Flex direction="row" justifyContent="between">  
            <Box column={6} borderStyle="sm" margin={8}>
                <Image
                alt="Antelope Canyon"
                naturalHeight={1}
                naturalWidth={1}
                src="https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg"
                />
            </Box>        
            <Box padding={8} margin={8} column={6} borderStyle="sm" >

            <p>Here I will tell you about me I have been baking since I was a little girl with my mom. She taught me everything I need to know about measuring, mixing, combining, oven use and more</p>
            </Box>
          </Flex>

        </Flex>
        
    </>
    );
  }