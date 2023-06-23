import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { motion } from "framer-motion";

import "../styles/style.scss";

function StakingApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000; // frequency provider is polling
    return library;
  };

  const getChainId = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    return library.chainId;
  };

  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1000); // Set time interval to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showPreloader) {
    return (
      <div className="fixed z-[9999] bg-black left-0 top-0 flex items-center justify-center bottom-0 right-0 overflow-hidden overflow-y-hidden">
        <img alt="" src="/img/loader.png" className="w-20 coin" />
      </div>
    );
  } else {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className=""
      >
        <Web3ReactProvider getLibrary={getLibrary} chainId={getChainId}>
          <Header />
          <Component {...pageProps} />
          <ToastContainer style={{ fontSize: 14 }} />
          <Footer />
        </Web3ReactProvider>
      </motion.section>
    );
  }
}

export default StakingApp;
