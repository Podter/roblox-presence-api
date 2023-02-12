import Head from "next/head";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: "https://github.com/Podter/roblox-presence-api",
      permanent: true,
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
