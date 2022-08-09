import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={"nav p-3 border-bottom"}>
      <Link href={'/'} passHref>
        <a>
          <h2 className={"pointer-event my-auto"}>
            Min Kg Kyaw
          </h2>
        </a>
      </Link>
      <Link href={"/bio"} passHref>
        <a>
          <h2 className={"ms-5 pointer-event lead my-auto"}> Bio </h2>
        </a>
      </Link>
    </nav>
  );
};

export default Nav;