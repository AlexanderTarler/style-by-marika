import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <div>Home</div>
        </Link>
        <Link href="/about">
          <div>About</div>
        </Link>
        <Link href={"https://timma.se/salon/style-by-marika"}>Boka tid</Link>
        {/* We can add other navigation links here */}
      </nav>
    </header>
  );
};

export default Header;
