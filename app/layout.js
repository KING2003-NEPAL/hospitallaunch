import "./globals.css";
export const metadata = { title: "HospitaLaunch" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
