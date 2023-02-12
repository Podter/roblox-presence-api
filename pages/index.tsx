import Head from "next/head";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "https://github.com/Podter/roblox-presence-api",
      permanent: false,
    },
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>roblox-presence-api</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>roblox-presence-api</h1>
        <h2>Expose your Roblox presence and activities to a RESTful API</h2>
      </main>
    </>
  );
}
