export interface HeroProps {
  content: {
    title: string;
    subTitle: string;
    highlights: {
      number: string;
      text: string;
    }[];
    btnText: string;
    imgSrc: string;
    imgAlt: string;
  };
}
const Hero = ({ content }: HeroProps) => {
  const { title, subTitle, highlights, btnText, imgSrc, imgAlt } = content;
  return (
    <div className="container mx-auto px-8 lg:px-32">
      <section className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-7xl font-medium">{title}</h1>
          <p className="lg:w-5/6 leading-relaxed lg:leading-loose my-6 lg:my-8">
            {subTitle}
          </p>
          <div className="items-center gap-24 hidden lg:flex">
            {highlights.map((item, index) => {
              const { number, text } = item;
              return (
                <article className="capitalize space-y-2 lg:mb-8" key={index}>
                  <h2 className="font-bold text-xl lg:text-2xl">{number}</h2>
                  <p className="text-sm lg:text-base">{text}</p>
                </article>
              );
            })}
          </div>
          <a
            className="inline-block px-12 lg:px-8 py-3 uppercase text-sm font-bold bg-orange-400 text-white mb-8 lg:mb-0"
            href="/products"
          >
            {btnText}
          </a>
        </div>
        <div className="min-w-full lg:min-w-0 w-5/12">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
