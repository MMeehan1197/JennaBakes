import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Post from './Post'

export default function HomePage() {
    return (<>
     <section className={utilStyles.headingMd}>
          <p>Hello There! I love to bake and make cool shit. Check this out!</p>
          
        </section>
        <Post/>
    </>
    );
  }