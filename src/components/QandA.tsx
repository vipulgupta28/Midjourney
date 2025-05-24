import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-4  rounded-xl shadow-lg">
      <button
        className="w-full flex justify-between items-center p-4 text-left text-white text-lg font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-300 border-t border-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

const QNA = () => {
  const faqs = [
    {
      question: "What is this platform about?",
      answer: "This platform is designed to offer Q&A support across various domains, enabling peer learning and expert advice."
    },
    {
      question: "How can I contribute?",
      answer: "You can contribute by answering questions, reporting bugs, or sharing your insights on different topics."
    },
    {
      question: "Is this service free to use?",
      answer: "Yes, the core functionality of the platform is completely free for everyone."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4 text-center">
        Questions & Answers
      </h1>
      <p className="text-gray-300 text-center max-w-xl mb-8">
        Discover a treasure trove of insights and solutions in our Questions and
        Answers section. Join our vibrant community of curious minds and embark on
        a journey of continuous learning.
      </p>

      {/* FAQ Section */}
      {faqs.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default QNA;
