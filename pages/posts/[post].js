import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function FirstPost() {
  const router = useRouter();
  const { post } = router.query;

  return (
    <Layout>
      <Head>
        <title>Post {post}</title>
      </Head>

      <h1>Post: {post}</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
