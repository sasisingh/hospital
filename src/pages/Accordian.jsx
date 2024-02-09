import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuMinusCircle } from "react-icons/lu";
const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 rounded-md">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200 cursor-pointer" onClick={onClick}>
        <span className="font-semibold">{title}</span>
        <span className="text-xl">{isOpen ? <b><LuMinusCircle /></b> : <b className=''><IoMdAddCircleOutline /></b> }</span>
      </div>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};

const AboutAccordian = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="container mx-auto bg-gray-100">
      <Accordion
        title="1. What are the physical and mental aspects of medicine?"
        isOpen={openIndex === 0}
        onClick={() => handleAccordionClick(0)}
      >
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, adipisci nulla dolores molestias ipsum eveniet. Veritatis, voluptate, voluptatem fugiat fuga consectetur explicabo ducimus itaque corrupti vero saepe blanditiis, amet dolores.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, a?</p>
      </Accordion>
      <Accordion
        title="2. Can such small doses be effective?"
        isOpen={openIndex === 1}
        onClick={() => handleAccordionClick(1)}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa nostrum veritatis! Autem, dicta nulla perspiciatis, est impedit voluptatem laborum temporibus ex vel dolorum quisquam molestias. Nam ducimus possimus harum.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, a?</p>
      </Accordion>
      <Accordion
        title="3. How can the correct medicine be found?"
        isOpen={openIndex === 2}
        onClick={() => handleAccordionClick(2)}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis facilis ea ipsa asperiores? Suscipit ducimus repudiandae illo, quos totam tenetur facere voluptates. Cum saepe tempore, dolorum earum impedit quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, a?</p>
      </Accordion>
      <Accordion
        title="4. Is medicine merely psychological"
        isOpen={openIndex === 3}
        onClick={() => handleAccordionClick(3)}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis facilis ea ipsa asperiores? Suscipit ducimus repudiandae illo, quos totam tenetur facere voluptates. Cum saepe tempore, dolorum earum impedit quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, a?</p>
      </Accordion>
    </div>
  );
};

export default AboutAccordian;
