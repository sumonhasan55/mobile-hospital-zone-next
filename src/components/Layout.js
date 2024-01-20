
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
