import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { Text } from 'gestalt';

export default function FirstPost() {
  return (
    <>
    <Layout>
      <Head>
        <title>How to bake a cake</title>
      </Head>
      <h1>How to bake a cake</h1>

      <Text>Pinterest Font</Text>
      
      <p>Jenna is the best baker! She can make some cool cakes. We will add photos and stuff here to bake a cake</p>
    </Layout>
    </>
  );
}