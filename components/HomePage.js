import Link from "next/link";
import utilStyles from "../styles/utils.module.css"

export default function HomePage() {
    return (
        <section className={utilStyles.headingMd}>
          <p>Hello There! I love to bake and make cool shit. Check this out!</p>
          <p>
            <Link href="/posts/first-post">How to bake a cake</Link>
          </p>
        </section>
    );
  }