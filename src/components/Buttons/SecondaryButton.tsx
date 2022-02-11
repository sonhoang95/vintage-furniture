import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export interface SecondaryButtonProps {
  btnText: string;
  url: string;
}
const SecondaryButton = ({ btnText, url }: SecondaryButtonProps) => {
  return (
    <div className="px-6 p-2 rounded-full bg-orange-400 text-white flex items-center gap-2 cursor-pointer hover:bg-orange-500 transform hover:scale-105 transition-all duration-300">
      <Link to={url}>{btnText}</Link>
      <span>
        <AiOutlineArrowRight />
      </span>
    </div>
  );
};

export default SecondaryButton;
