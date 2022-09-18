import Nav from "../components/nav";

export default function Header() {
  return (
    <>
      <header className="bg-[red] h-16">
        <div className="wrapper h-full">
          <div className="flex gap-3 justify-between items-center h-full items-center">
            <h1>Logo</h1>
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
}
