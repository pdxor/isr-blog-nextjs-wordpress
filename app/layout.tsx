import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../styles/globals.css';

import { ApolloProvider } from "@apollo/client";
// import { client } from "../lib/apolloClient";
import { AuthProvider } from "../hooks/useAuth";

import { Providers } from "@/components/Providers";

export const metadata = {
  title: 'BTC University',
  description: 'Copyright © Behindthechair.com 2023. All rights reserved.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthProvider>
            <Header />
              {children}
            <Footer />
          </AuthProvider>
        </Providers>

      </body>
    </html>
  )
}
