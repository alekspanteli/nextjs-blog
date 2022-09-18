import Nav from "../components/nav";

export default function Header() {
  return (
    <>
      <header className="bg-[red] py-5">
        <div className="wrapper">
          <div className="flex gap-3 justify-between items-center items-center">
            <h1>Logo</h1>
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
}
