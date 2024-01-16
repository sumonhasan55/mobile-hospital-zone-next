import { useForm } from 'react-hook-form';
import googlesvg from "../assets/images/google.svg";
import githubsvg from "../assets/images/github-code-source.svg";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data)=>console.log(data)
  const onSubmit = async ({ email, password }) => {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push('/');
    }
  };
  return (
    <div>
      <Head>
        <title>SignUp</title>
      </Head>
      <div className={styles.form}>
        <h3  className=' mt-2  text-xl  font-bold'>SIGNUP WITH</h3>
        <div className={styles.social_icons}>
          <button onClick={()=>signIn("google",{
            callbackUrl:"https://mobile-hospital-zone-next-jlcoyhdq7-sumonhasan55.vercel.app/"
          })} ><Image
          src={googlesvg}
          width={700}
          alt="error_image"
          style={{ display: "flex", margin: "5px auto" }}
        /></button>
          <button onClick={()=>signIn("github",{
            callbackUrl:"https://mobile-hospital-zone-next-jlcoyhdq7-sumonhasan55.vercel.app/"
          })} ><Image
          src={githubsvg}
          width={700}
          alt="error_image"
          style={{ display: "flex", margin: "5px auto" }}
        /></button>
        </div>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="">Your Email</label>
          <input {...register('email', { required: true })} type="email" className=' text-black' />

          <label htmlFor="">Your Password</label>
          <input {...register('passwword', { required: true })} type="password" className=' text-black' />

          <button type="submit" className=' bg-primary rounded-xl text-xl py-2 my-2'>SIGNUP</button><br></br>

           <Link href="login"  type='link'><p className=' italic underline'>All Ready Have an Account?</p></Link>
        </form>
      </div>
      
    </div>
  );
};


export default LoginPage;
