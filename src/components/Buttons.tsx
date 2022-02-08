import { Link } from 'react-router-dom';

export interface PrimaryButtonProps {
  btnText: string;
  url: string;
}
export const PrimaryButton = ({ btnText, url }: PrimaryButtonProps) => {
  return (
    <>
      <Link
        className="inline-block px-12 lg:px-8 py-3 uppercase text-sm font-bold bg-orange-400 hover:bg-orange-500 transition-colors duration-300 text-white mb-8 lg:mb-0"
        to={url}
      >
        {btnText}
      </Link>
    </>
  );
};
