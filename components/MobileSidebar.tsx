// @ts-nocheck

import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import NavItems from './NavItems';

const MobileSidebar = () => {
  const sidebarRef = useRef<SidebarComponent | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this component only renders fully on the client
  }, []);

  const toggleSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.toggle();
    }
  };

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <div className='mobile-sidebar wrapper'>
      <header>
        <Link to='/'>
          <h1 className='gradient-title'>LILWander ✨</h1>
        </Link>
        <button onClick={toggleSidebar}>
          <img src='/assets/icons/menu.svg' alt='menu' className='size-7' />
        </button>
      </header>
      <SidebarComponent
        width={270}
        ref={sidebarRef}
        created={() => {
          if (sidebarRef.current) {
            sidebarRef.current.hide();
          }
        }}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type='over'
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
