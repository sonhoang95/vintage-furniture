export interface ContactProps {
  title: string;
  text: string | JSX.Element;
}

const Contact = ({ title, text }: ContactProps) => {
  return (
    <section className="bg-gray-100 text-center py-12 lg:py-24">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="space-y-6 mb-10">
          <h2 className="text-3xl lg:text-4xl font-semibold">{title}</h2>
          <p className="lg:text-lg text-gray-500">{text}</p>
        </div>
        <form
          action="https://formspree.io/f/mjvlyqoo"
          method="POST"
          className="flex items-center justify-center"
        >
          <input
            type="email"
            name="_replyto"
            required
            placeholder="Enter email"
            className="border border-gray-900 lg:w-2/5 p-3"
          />
          <button
            type="submit"
            className="px-4 lg:px-6 py-[13.5px] bg-gray-900 text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
