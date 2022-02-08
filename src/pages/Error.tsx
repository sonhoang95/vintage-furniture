import { PrimaryButton } from '../components/Buttons';

const Error = () => {
  return (
    <div className="h-[796px] flex flex-col items-center justify-center tracking-wider">
      <h1 className="font-bold text-9xl">404</h1>
      <h3 className="my-8 font-semibold text-2xl">
        Sorry, the page you tried cannot be found.
      </h3>
      <PrimaryButton btnText="Back home" url="/" />
    </div>
  );
};

export default Error;
