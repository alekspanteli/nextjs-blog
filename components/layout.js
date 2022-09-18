import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="bg-[yellow]">
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
