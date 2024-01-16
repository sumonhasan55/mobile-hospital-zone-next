
import AboutPage from "@/components/About";
import Head from "next/head";
import Link from "next/link";



const AboutusPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <AboutPage/>
      
    </div>
  );
};

export default AboutusPage;


