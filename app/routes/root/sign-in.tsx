import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Loading } from 'components';
import { Link, redirect } from 'react-router';
import { loginWithGoogle } from '~/appwrite/auth';
import { account } from '~/appwrite/client';

export async function clientLoader() {
  try {
    const user = await account.get();

    if (user.$id) return redirect('/');
  } catch (e) {
    console.log('Error fetching user', e);
  }
}

const SignIn = () => {
  return (
    <main className='auth'>
      <section className='size-full glassmorphism flex-center px-6'>
        <div className='sign-in-card'>
          <header className='header'>
            <h1 className='p-30-bold gradient-title'>LILWander ✨</h1>
          </header>
          <article>
            <h2 className='p-24-semibold text-dark-100 text-center bg-radical-50 w-fit'>
              Plan Smarter, Travel Better
            </h2>
            <p className='p-18-regular text-center text-gray-100 !leading-7'>
              Sign in with Google to generate custom itineraries and view your
              travel activity in one place.
            </p>
          </article>
          <ButtonComponent
            type='button'
            iconCss='e-search-icon'
            className='button-class !h-11 !w-full'
            onClick={loginWithGoogle}
          >
            <img
              src='/assets/icons/google.svg'
              className='size-5'
              alt='google'
            />
            <span className='p-18-semibold text-white'>
              Sign in with Google
            </span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
