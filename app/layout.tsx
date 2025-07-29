import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/components/theme-provider'
import { ReactQueryProvider } from '@/components/providers/react-query-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pranav Pisal - Portfolio',
  description: 'Computer Engineer with expertise in Java development, full-stack solutions, and problem-solving. Passionate about creating innovative software solutions.',
  openGraph: {
    title: 'Pranav Pisal - Portfolio',
    description: 'Computer Engineer with expertise in Java development, full-stack solutions, and problem-solving.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
            <TooltipProvider>
              <Toaster />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}