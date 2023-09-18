'use client'
import { AnimatePresence, motion } from 'framer-motion'
import '../styles/globals.css'
import GoogleAnalytics from './Analytics'
import { useParams, usePathname } from 'next/navigation'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  const route = usePathname();
  console.log('ROUTE', route);
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <AnimatePresence mode='sync'>
          <div className="flex flex-col min-h-screen" id="app_root">
            <motion.div
              key={route}
              initial="pageInitial"
              animate="pageAnimate"
              exit="pageExit"
              transition={{
                duration: 0.75,
              }}
              variants={{
                pageInitial: {
                  opacity: 0.8,
                },
                pageAnimate: {
                  opacity: 1,
                },
                pageExit: {
                  opacity: 0,
                },
              }}
            >
              {children}
            </motion.div>
          </div>
        </AnimatePresence>
      </body>
    </html>
  )
}