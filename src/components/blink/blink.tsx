import '@dialectlabs/blinks/index.css';

import {
    Blink,
    useAction
  } from '@dialectlabs/blinks';
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana"


// needs to be wrapped with <WalletProvider /> and <WalletModalProvider />
export const BlinksSAF = () => {

   const RPC_ENDPOINT = "https://api.devnet.solana.com";
  
  const { adapter } = useActionSolanaWalletAdapter(
    RPC_ENDPOINT,
  );
  const { action, isLoading } = useAction({
    url: 'solana-action:https://www.solana-ark-foundation.xyz/api/actions',
  });

  
   if (isLoading) return "Loading..."; 

   if (!action) return "No action found";

   return (
    <div className="-mt-10"> {/* Use negative margin */}
    <Blink action={action} adapter={adapter} />
  </div>
   )
}