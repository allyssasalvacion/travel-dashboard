import { cn } from '~/lib/utils';
import { Link, NavLink, useLoaderData, useNavigate } from 'react-router';
import { sidebarItems } from '~/constants';
import { logoutUser } from '~/appwrite/auth';

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/sign-in');
  };

  return (
    <section className='nav-items'>
      <Link to='/' className='link-logo'>
        <h1>LILWander ✨</h1>
      </Link>

      <div className='container'>
        <nav>
          {sidebarItems.map(({ id, href, icon, label, logout, disabled }) =>
            disabled ? (
              <div
                key={id}
                className='group nav-item opacity-50 pointer-events-none cursor-not-allowed'
              >
                <img src={icon} alt={label} />
                {label}
              </div>
            ) : (
              <NavLink to={href!} key={id}>
                {({ isActive }: { isActive: boolean }) => (
                  <div
                    className={cn('group nav-item', {
                      'bg-radical-50': isActive && !logout,
                    })}
                    onClick={logout ? handleLogout : handleClick}
                  >
                    <img src={icon} alt={label} />
                    {label}
                  </div>
                )}
              </NavLink>
            )
          )}
        </nav>
        {/* <footer className='nav-footer'>
          <img
            src={user?.imageUrl || '/assets/images/david.webp'}
            alt={user?.name || 'Guest'}
            referrerPolicy='no-referrer'
          />
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>
        </footer> */}
      </div>
    </section>
  );
};

export default NavItems;
