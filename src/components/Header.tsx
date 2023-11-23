import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/about">
          <div>Om oss</div>
        </Link>
        <Link href={"https://timma.se/salon/style-by-marika"}>Boka tid</Link>
      </nav>
    </header>
  );
};

export default Header;
