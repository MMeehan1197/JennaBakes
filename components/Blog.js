import { Flex, Box, Image } from "gestalt";
import 'gestalt/dist/gestalt.css';
import ImagePost from "./ImagePost";


export default function Blog() {
    return (<>
        <Flex direction="column">
          <Flex direction="row" justifyContent="around">          
            <ImagePost/>
            <ImagePost/>
            <ImagePost/>

            <ImagePost/>
          </Flex>
          <Flex direction="row" justifyContent="evenly">          
            <ImagePost/>
            <ImagePost/>
            <ImagePost/>
          </Flex>
        </Flex>
        
    </>
    );
  }