export interface Detail {
  heading: string;
  text: string;
}

export interface ValuesProps {
  values: {
    title: string;
    details: Detail[];
  };
}

const Values = ({ values }: ValuesProps) => {
  return (
    <section className="lg:w-5/6 mx-auto mb-32">
      <h2 className="text-center font-bold text-4xl lg:text-5xl mb-12">
        {values.title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {values.details.map((value, index) => {
          const { heading, text } = value;
          return (
            <article key={index} className="space-y-2">
              <h3 className="text-xl font-semibold">{heading}</h3>
              <p className="leading-loose font-light">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
