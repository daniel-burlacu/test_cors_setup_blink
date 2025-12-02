import './globals.css'
import {ClusterProvider} from '@/components/cluster/cluster-data-access'
import {SolanaProvider} from '@/components/solana/solana-provider'
// import { DonateProvider} from '@/components/donate/donate-provider'
import {UiLayout} from '@/components/ui/ui-layout'
import {ReactQueryProvider} from './react-query-provider'
import {LanguageProvider} from '@/contexts/LanguageContext'

export const metadata = {
  title: 'Anivera',
  description: 'Created by Daniel Burlacu',
  icons: {
    icon: [
      { url: '/SAFLogo.png' },
      { url: '/SAFLogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/SAFLogo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/SAFLogo.png',
    shortcut: '/SAFLogo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <LanguageProvider>
                <UiLayout>{children}</UiLayout>
              </LanguageProvider>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
