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
      <body>{children}</body>
    </html>
  )
}
