import Footer from 'layouts/footer';
import Header from 'layouts/header';
import Head from 'next/head';
import { ReactNode } from 'react';
type PageContainerProps = {
  children: ReactNode;
};
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <>
      <Head>
        <title>Nextjs Template with Typescript</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default PageContainer;
