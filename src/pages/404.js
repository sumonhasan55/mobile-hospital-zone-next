import ErrorImg from "../assets/images/404_Error_Page.png";
import Image from "next/image";
import Head from "next/head";
import {useRouter} from "next/router";
const NotFoundPage = () => {

    const router = useRouter();

    setTimeout(()=>{
        router.push("/")
    },3000)

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>404 Not Found</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={ErrorImg}
        width={700}
        alt="error_image"
        style={{ display: "flex", margin: "50px auto" }}
      />
      
    </div>
  );
};

export default NotFoundPage;
