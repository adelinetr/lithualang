import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function FAQprops() {

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.refresh();
  }, [isOpen]);

  return (
    <details open={isOpen} onClick={handleToggle}>
      <summary>{question}</summary>
      <p data-aos="fade-down" data-aos-duration="2500">{answer}</p>
    </details>
  );
};
}