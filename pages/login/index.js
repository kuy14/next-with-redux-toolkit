import Head from "next/head";
import LoginForm from "../../components/login-form";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login | Photo Album</title>
      </Head>
      <LoginForm />
      <hr />
    </>
  );
};

export default LoginPage;
