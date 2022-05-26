import { Helmet } from 'react-helmet';
import { Accordion } from '../components';
import faqBcg from '../images/faq.jpg';
import { faqContent } from '../utils/constant';

const FAQ = () => {
  const { title, text, accordions } = faqContent;
  return (
    <>
      <Helmet>
        <title>Vintage Furniture | FAQs</title>
        <meta
          name="description"
          content="Your frequently asked questions are answered here"
        />
      </Helmet>
      <main className="lg:my-16">
        <div className="container mx-auto px-8 lg:px-32">
          <section className="flex flex-col lg:flex-row gap-16 pb-8">
            <div className="lg:w-1/3 flex flex-col gap-12 lg:gap-16">
              <div className="flex">
                <div className="w-1/3 hidden lg:block"></div>
                <div className="lg:w-2/3">
                  <h1 className="text-5xl font-bold mb-6 lg:mb-4 text-orange-400">
                    {title}
                  </h1>
                  <p className="text-gray-700 leading-relaxed">{text}</p>
                </div>
              </div>
              <div>
                <img src={faqBcg} alt="chair" />
              </div>
            </div>
            <div className="lg:w-2/3">
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
    </>
  );
};

export default FAQ;
