import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
      <Script src="https://kit.fontawesome.com/7409f70bd9.js" crossorigin="anonymous" />
    </ThemeProvider>
  );
};

export default MyApp;
