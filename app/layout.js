import "./globals.css";
export const metadata = { title: "HospitaLaunch", description: "Career Passport Platform" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
