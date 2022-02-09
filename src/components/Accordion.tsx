import { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

export interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <article className="space-y-4 border-t border-gray-700 py-4 font-light">
      <header className="flex justify-between lg:text-xl items-start gap-6 lg:gap-0">
        <h3>{question}</h3>
        <button
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className="mt-2 lg:mt-0"
        >
          {isAccordionOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </header>
      {isAccordionOpen && <p className="text-xs lg:text-sm">{answer}</p>}
    </article>
  );
};

export default Accordion;
