import { useAddress, useMetamask, useEditionDrop, useClaimNFT, useNetwork, useNetworkMismatch, useUser, useLogin, ConnectWallet} from "@thirdweb-dev/react";

import { contractAddress } from "../const/yourDetails";

import { ChainId } from "@thirdweb-dev/sdk";
import styles from "../styles/Home.module.css";

import Navbar from '../components/Navbar';

export default function Login() {
  // Wallet & Network Information
  const address = useAddress();
  //const connectWithMetamask = useMetamask();

  // Hooks to ensure user is on the right network
  // const [, switchNetwork] = useNetwork();
  // const networkMismatch = useNetworkMismatch();

  // For user to claim an NFT to then view the restricted content
  // const editionDropContract = useEditionDrop(
  //   contractAddress // replace this with your contract address
  // );

  // Hook to claim NFTs from the NFT drop (to allow users to claim and *then* view the restricted content)
  // const { mutate: claimNft, isLoading: isClaiming } =
  //   useClaimNFT(editionDropContract);

  // Hooks to sign in with ethereum (auth SDK)
  const login = useLogin(); // Sign in
  const { user } = useUser(); // Get current user (unused on this page)

  return (
    <div>
      <Navbar></Navbar>
      
      <div className={styles.container}>
        <h1 className={styles.h1}>Auth - NFT Gated Content</h1>
        <p className={styles.explain}>
          Serve exclusive content to users who own an NFT from your collection here!
        </p>

        <p className={styles.explain}>
          You cannot access the main page unless you own an NFT from our
          collection!
        </p>

        <hr className={styles.divider} />

        {address ? (
          <>
            <p>Welcome, {address.slice(0, 6)}...</p>

            {/* <button
              className={styles.mainButton}
              style={{ width: 256 }}
              onClick={login}
            >
              Sign In
            </button> */}

            {/* <p>
              For demo purposes, you can claim an NFT from our collection below:
            </p> */}

            {/* <button
              className={styles.secondaryButton}
              onClick={() => {
                if (networkMismatch) {
                  switchNetwork(ChainId.Goerli);
                  return;
                }
                claimNft({
                  quantity: 1,
                  tokenId: 0,
                  to: address,
                });
              }}
            >
              {!isClaiming ? " Claim An NFT" : "Claiming..."}
            </button> */}
          </>
        ) : (
          <>
          {/* <ConnectWallet colorMode="light"></ConnectWallet>
            <button
              className={styles.mainButton}
              style={{ width: "fit-content", paddingRight: 16, paddingLeft: 16 }}
              onClick={() => connectWithMetamask()}
            >
              Connect Wallet
            </button> */}
          </>
        )}
      </div>
    </div>
  );
}
