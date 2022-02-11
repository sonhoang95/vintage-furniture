import { SimpleButton } from './Buttons';

export interface MissionsProps {
  title: string;
  messages: {
    id: number;
    title: string;
    text: string;
  }[];
}
const Missions = ({ title, messages }: MissionsProps) => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:mr-40 mb-8 lg:mb-0">
        <h2 className="text-2xl lg:text-4xl leading-normal font-semibold mb-6 lg:mb-12">
          {title}
        </h2>
        <SimpleButton btnText="explore all variations" url="/products" />
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
