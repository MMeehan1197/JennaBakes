import {Flex, Link, Box} from "gestalt";
import Image from 'next/image';
import 'gestalt/dist/gestalt.css';
import React from "react";
import utilStyles from "../styles/utils.module.css";

const name = 'Jenna Mickle';


export default function ProfileBox() {
    return (
        <Flex alignItems="center" direction="column">
        <Box width={200} height={200} rounding="circle">
                <Link href="/">
                    <Image
                    priority
                    src="/images/Jenna.jpg"
                    className={utilStyles.borderCircle}
                    alt=""
                    width={200}
                    height={200}
                    />
                </Link>
            </Box>
            <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                    {name}
                </Link>
            </h2>
        </Flex>

    )
}

