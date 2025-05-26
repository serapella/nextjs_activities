import Link from "next/link";

const Header = () => {
  return (
    <header>
      <p>logo</p>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/cocktails">Cocktails</Link>
          </li>
          <li>
            <Link href={"/pokedex2"}>Pokedex</Link>
          </li>
          <li>
            <Link href="/activities">Activities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
