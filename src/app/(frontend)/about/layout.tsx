import React from 'react'
import '../styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <main className="min-h-dvh">{children}</main>
      </body>
    </html>
  )
}
