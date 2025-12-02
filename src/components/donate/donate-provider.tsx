'use client';
import { PublicKey } from '@solana/web3.js'
import { BlinksSAF } from '../blink/blink'
import { AccountBalance } from '../account/account-ui'
import { AppHero ,ellipsify} from '../ui/ui-layout'
import { ExplorerLink } from '../cluster/cluster-ui'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext';


export const DonateProvider: React.FC = () => {
  const { t } = useLanguage();
  const vault = process.env.NEXT_PUBLIC_VAULT_PUBLIC_KEY || '';
  if (!vault) {
  throw new Error("Missing NEXT_PUBLIC_VAULT_PUBLIC_KEY in environment variables");
}
  const address = new PublicKey(vault);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
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
             {/* Quote Text */}
             <div className="max-w-xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8 text-center">
             <motion.h1
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
               {t.donate.donateAndMint}
              </motion.h1>
             </div>
    </div>
  );
};
