import Link from 'next/link';

function Navbar() {
  return (
     <nav>
          <h3>Navigation-test</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/How-It-Works">How It Works</Link></li>
            <li><Link href="/About-us">About</Link></li>
          </ul>
        </nav>
  );
}

export default Navbar;