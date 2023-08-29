import '../styles/globals.css'
import GoogleAnalytics from './Analytics'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
      </body>
    </html>
  )
}