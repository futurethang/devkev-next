import "../styles/globals.scss";
import GoogleAnalytics from "./Analytics";
import WebVitals from "./_components/webvitals";
import { roboto, roboto_mono } from "./fonts";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${roboto_mono.className}`}>
      <body>
        {/* @ts-ignore */}
        <WebVitals />
        <GoogleAnalytics />
        <div className="flex flex-col min-h-screen" id="app_root">
          {children}
        </div>
      </body>
    </html>
  );
}
