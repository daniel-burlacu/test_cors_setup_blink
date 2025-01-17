import { PublicKey } from '@solana/web3.js'
import { BlinksSAF } from '../blink/blink'
import { AccountBalance, AccountTransactions } from '../account/account-ui'
import { useMemo } from 'react'
import { useParams } from 'next/navigation'
import { AppHero ,ellipsify} from '../ui/ui-layout'
import { ExplorerLink } from '../cluster/cluster-ui'


export const DonateProvider: React.FC = () => {
  console.log("Wallet: ", process.env.wallet);
  const address = new PublicKey("BN8LeCtMenajmBbzRKqkPFcP2hAJjrtCFfd4XmUqxJ9G");
  return (
    <div>
        <AppHero
              title={<AccountBalance address={address} />}
              subtitle={
                <div className="my-4">
                  <ExplorerLink path={`account/${address}`} label={ellipsify(address.toString())} />
                </div>
              }
            >
            </AppHero>
         
      <BlinksSAF />
    </div>
  );
};
