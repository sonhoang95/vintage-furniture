import { Accordion } from '../components';
import faqBcg from '../images/faq.jpg';
import { faqContent } from '../utils/constant';

const FAQ = () => {
  const { title, text, accordions } = faqContent;
  return (
    <main className="my-16">
      <div className="container mx-auto px-8 lg:px-32">
        <section className="flex gap-16 pb-8">
          <div className="w-1/3 flex flex-col gap-16">
            <div className="flex">
              <div className="w-1/3"></div>
              <div className="w-2/3">
                <h1 className="text-5xl font-bold mb-4 text-orange-400">
                  {title}
                </h1>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            </div>
            <div>
              <img src={faqBcg} alt="chair" />
            </div>
          </div>
          <div className="w-2/3">
            <section className="space-y-4">
              <h2 className="text-sm font-semibold">General Information</h2>
              {accordions.map((accordion, index) => (
                <Accordion {...accordion} key={index} />
              ))}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FAQ;
