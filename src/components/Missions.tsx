import { Link } from 'react-router-dom';

export interface MissionsProps {
  title: string;
  btnText: string;
  messages: {
    id: number;
    title: string;
    text: string;
  }[];
}
const Missions = ({ title, btnText, messages }: MissionsProps) => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:mr-40 mb-8 lg:mb-0">
        <h2 className="text-2xl lg:text-4xl leading-normal font-semibold mb-6 lg:mb-12">
          {title}
        </h2>
        <Link
          to="/products"
          className="text-orange-400 uppercase underline font-semibold hover:text-orange-600 transition-colors duration-300"
        >
          {btnText}
        </Link>
      </div>
      <div className="space-y-6">
        {messages.map(message => {
          const { id, title, text } = message;
          return (
            <div key={id} className="space-y-4">
              <h3 className="lg:text-lg font-semibold">{title}</h3>
              <p className="font-light text-sm">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Missions;
