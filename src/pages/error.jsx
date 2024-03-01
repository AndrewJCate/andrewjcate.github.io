import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className='h-dvh w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Oops!</h2>
                <p className='text-gray-300 text-lg py-2'>Sorry, an unexpected error has occurred.</p>
                <p className='text-gray-300 text-lg'>
                    Error message:<span> </span>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    </div>
  );
}