import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
