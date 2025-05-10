import { Outlet, redirect, useNavigation } from 'react-router';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { Loading, MobileSidebar, NavItems } from 'components';
import { getExistingUser, storeUserData } from '~/appwrite/auth';
import { account } from '~/appwrite/client';

export async function clientLoader() {
  try {
    const user = await account.get();

    if (!user.$id) return redirect('/sign-in');

    const existingUser = await getExistingUser(user.$id);
    if (existingUser?.status === 'user') {
      return redirect('/');
    }

    return existingUser?.$id ? existingUser : await storeUserData();
  } catch (e) {
    console.log('Error fetching user', e);
    return redirect('/sign-in');
  }
}

const AdminLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.state !== 'idle');

  return (
    <div className='admin-layout relative'>
      {isNavigating && <Loading />}
      <MobileSidebar />
      <aside className='w-full max-w-[270px] hidden lg:block z-1000'>
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      <aside className='children'>
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
