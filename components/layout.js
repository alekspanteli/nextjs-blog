import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <a href="#content" class="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Header />
      <main className="bg-[yellow]" id="content">
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
