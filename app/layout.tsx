import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'High Value Capital | Formation Trading Forex',
  description: 'Rejoins une communaute de traders francophones qui passent leurs challenges propfirm et generent des payouts reels. 7+ Funded Traders, 20k$+ de payouts documentes.',
  keywords: 'trading, forex, formation, propfirm, funded trader, ARD, ICT, SMC, liquidite',
  authors: [{ name: 'Jordy Banks' }],
  openGraph: {
    title: 'High Value Capital | Formation Trading Forex',
    description: 'Decouvre la methode qui a permis a 7+ membres de devenir Funded Traders.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  )
}
