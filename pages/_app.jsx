import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import { domainName } from "../const/yourDetails";
import "../styles/globals.css";

import Navbar from '../components/Navbar';
import { BrowserRouter } from "react-router-dom";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
        loginRedirect: "/",
      }}
    >
      <Head>
        <title>NFT Gated Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn how to use the thirdweb Auth SDK to create an NFT Gated Website"
        />
      </Head>
      <>
      
      {/* <Navbar></Navbar>   */}
      
      <Component {...pageProps} />
      </>
    </ThirdwebProvider>
  );
}

export default MyApp;
