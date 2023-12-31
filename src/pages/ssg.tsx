import { NextPage, GetStaticProps, NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = ({ message }: SSGProps) => {
  const hello = "hello";
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{message}</p>
        <Link href="/ssr">
          <a>Go to SSR</a>
        </Link>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async (
  context: any
) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);
  return {
    props: {
      message,
    },
  };
};

export default SSG;
