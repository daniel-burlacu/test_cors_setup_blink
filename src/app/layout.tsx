import './globals.css'
import {UiLayout} from '@/components/ui/ui-layout'
import {LanguageProvider} from '@/contexts/LanguageContext'

export const metadata = {
  title: 'Anivera',
  description: 'ANIVERA is an AI universe for veterinary teams and animal care.',
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
      <body className="bg-white">
        <LanguageProvider>
          <UiLayout>{children}</UiLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}
