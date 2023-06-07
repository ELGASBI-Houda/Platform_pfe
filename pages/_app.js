import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="pt-2 px-12 lg:px-48">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
