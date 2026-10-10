export const metadata = {
  title: 'Canonical Memory Verifier',
  description: 'Improved Neural Always Free build',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
