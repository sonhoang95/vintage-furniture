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
      <header className="flex justify-between text-xl">
        <h3>{question}</h3>
        <button onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
          {isAccordionOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </header>
      {isAccordionOpen && <p className="text-sm">{answer}</p>}
    </article>
  );
};

export default Accordion;
