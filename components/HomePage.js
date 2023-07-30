import utilStyles from "../styles/utils.module.css";
import Post from './Post'
import { Flex } from "gestalt";
import 'gestalt/dist/gestalt.css';

export default function HomePage() {
    return (<>
     <section className={utilStyles.headingMd}>
          <p>Hello There! I love to bake and make cool shit. Check this out!</p>
          
        </section>
        <Flex direction="column">
          <Flex direction="row" justifyContent="between">          
            <Post/>
            <Post/>
          </Flex>

          <Post/>
          <Post/>
        </Flex>
        
    </>
    );
  }