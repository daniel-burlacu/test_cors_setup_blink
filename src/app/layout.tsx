import './globals.css'
import {ClusterProvider} from '@/components/cluster/cluster-data-access'
import {SolanaProvider} from '@/components/solana/solana-provider'
// import { DonateProvider} from '@/components/donate/donate-provider'
import {UiLayout} from '@/components/ui/ui-layout'
import {ReactQueryProvider} from './react-query-provider'

export const metadata = {
  title: 'Solana Ark Foundation',
  description: 'Created by Daniel Burlacu',
}

const links: { label: string; path: string }[] = [
  // { label: 'Top-Donations', path: '/account' },
  // { label: 'Clusters', path: '/clusters' },
  { label: 'Home', path: '/home' }, // Add this
  { label: 'Donate', path: '/donate' }, // Add this
  { label: 'Project', path: '/project' }, // Add this
  { label: 'Road-Map', path: '/roadmap' }, // Add this
  { label: 'About-Us', path: '/aboutus' }, // Add this
  { label: 'Contact-Us', path: '/contactus' }, // Add this
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <UiLayout links={links}>{children}</UiLayout>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
