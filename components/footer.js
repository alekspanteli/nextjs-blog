export default function Footer() {
  return (
    <>
      <footer className="bg-[green] py-5">
        <div className="wrapper">
          &copy; {new Date().getFullYear()} Footer goes here
        </div>
      </footer>
    </>
  );
}
