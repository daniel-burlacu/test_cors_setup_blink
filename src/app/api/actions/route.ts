import {
    ActionGetResponse,
    ActionPostRequest,
    ActionPostResponse,
    createPostResponse,
    createActionHeaders
  //  ACTIONS_CORS_HEADERS
  } from "@solana/actions";
   import { ACTIONS_CORS_HEADERS } from "../../../const/constants";
  import {
    clusterApiUrl,
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
  } from "@solana/web3.js";
  import {
    toWeb3JsInstruction,
  } from "@metaplex-foundation/umi-web3js-adapters";
  
  // import wallet from "/home/daniel/.solana/.config/localwallet.json";
  const wallet = JSON.parse(process.env.KEY_WALLET || '[]');
  // import { mintNFTForUser } from "../nft/nft_mint_wallet";
  // import { mintNFTForUser } from "../nft/nft_mint";
//   import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
//   import {
//     createSignerFromKeypair,
//     none,
//   } from "@metaplex-foundation/umi";
//   import {
//     createNft,
//     mplTokenMetadata,
//   } from "@metaplex-foundation/mpl-token-metadata";
//   import {
//     generateSigner,
//     percentAmount,
//     signerIdentity,
//   } from "@metaplex-foundation/umi";
  
//   import {
//     createTransferInstruction,
//     getAssociatedTokenAddress,
//     getOrCreateAssociatedTokenAccount,
//   } from "@solana/spl-token";
  
  let transactionCompleted = false; // Global boolean state
  
  const wKeyTest = Keypair.fromSecretKey(new Uint8Array(wallet));
  console.log("Wallet address is :", wKeyTest.publicKey.toBase58());
  
  export async function GET(request: Request) {
    const requestUrl = new URL(request.url);
  
    const responseBody: ActionGetResponse = transactionCompleted
      ? {
          icon: "https://bafkreibllcqfjk5ch26tdq7sqotkq3xxlymivip6ta7rdjhaf2qccnzc7u.ipfs.flk-ipfs.xyz",
          description: "Thank you for your donation! You can now mint your NFT.",
          title: "Solana Ark Foundation Supporter",
          label: "Mint an NFT",
          links: {
            actions: [
              {
                type: "transaction",
                label: "Mint NFT",
                href: requestUrl.origin + "/api/actions?action=mint",
              },
            ],
          },
        }
      : {
          //icon: "https://bafybeibqfafl757oc2ts3dnyxpapq7fthx2og2kod4cd3yeysm7q6hxaxq.ipfs.flk-ipfs.xyz",
          icon: "https://bafkreibllcqfjk5ch26tdq7sqotkq3xxlymivip6ta7rdjhaf2qccnzc7u.ipfs.flk-ipfs.xyz",
          description:
            "The time to act is now! ... before their silence becomes our legacy.",
          title: "Solana Ark Foundation Supporter",
          label: "Make a donation",
          links: {
            actions: [
              {
                type: "transaction",
                label: "Send 0.05 Sol",
                href: requestUrl.origin + "/api/actions?action=send0.05",
              },
            ],
          },
        };
  
    return Response.json(responseBody, { headers: ACTIONS_CORS_HEADERS });
  }

  // export const OPTIONS = async (req: Request) => {
  //   const headers = createActionHeaders();
    
  //   return new Response(null, { headers }); // CORS headers here
  // };

  export const OPTIONS = async () => {

    return new Response(null,{ headers: ACTIONS_CORS_HEADERS }); // CORS headers here
  };
  