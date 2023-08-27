import { GetServerSideProps, NextPage } from "next";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってアクセス時にサーバで描画されたページです。
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にこのページのgetServerSidePropsが実行されました`;
  console.log(message);
  return {
    props: {
      message,
    },
  };
};

export default SSR;
