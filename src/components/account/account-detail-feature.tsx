'use client'

import { PublicKey } from '@solana/web3.js'
import { useMemo } from 'react'

import { useParams } from 'next/navigation'

import { ExplorerLink } from '../cluster/cluster-ui'
import { AppHero, ellipsify } from '../ui/ui-layout'
import { AccountBalance, AccountTransactions } from './account-ui'

export default function AccountDetailFeature() {
  const vault = JSON.parse(process.env.PUBLIC_KEY || '');
  const address = new PublicKey(vault);
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
      <div className="space-y-8">
        <AccountTransactions address={address} />
      </div>
    </div>
  )
}
