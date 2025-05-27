import "@/ui/styles/custom.scss"

export const metadata = {
  title: '~Yukiko Webspace~',
  description: "Yukiko's personal webiste",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="RLU8nWd65ywhI3nIqDqLY6TV1Uftbx4u1_yGS0pXfWA" />
      </head>
      <body>{children}</body>
    </html>
  )
}
