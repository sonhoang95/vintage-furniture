import { Link } from 'react-router-dom';

export interface SimpleButtonProps {
  btnText: string;
  url: string;
  icon?: JSX.Element;
}

const SimpleButton = ({ btnText, url, icon }: SimpleButtonProps) => {
  return (
    <div className="flex items-center gap-1">
      {icon && <span className="text-orange-400 text-lg">{icon}</span>}
      <Link
        to={url}
        className="text-orange-400 uppercase underline font-semibold hover:text-orange-600 transition-colors duration-300"
      >
        {btnText}
      </Link>
    </div>
  );
};

export default SimpleButton;
