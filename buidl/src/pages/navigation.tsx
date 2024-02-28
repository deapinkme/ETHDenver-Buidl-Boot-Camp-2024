// Navigation.tsx

import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/runs">
            <a>Runs</a>
          </Link>
        </li>
        {/* Add links to other pages */}
        <li>
          <Link href="/rewards">
            <a>Rewards</a>
          </Link>
        </li>
        <li>
          <Link href="/friends">
            <a>Friends</a>
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
