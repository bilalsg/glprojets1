"use client"
import React from 'react';
import FeedbackCard from '@/components/Card';

import Services from './Services'

interface TestimonialsProps {}
const feedback = [
  {
    content:
    "L'argent n'est qu'un outil. Il vous emmènera partout où vous le souhaitez, mais il ne vous remplacera pas en tant que conducteur.",
    name: "Herman Jensen",
    title: "Fondateur et Leader",
    img: "/avatars/avatar1.jpg",
  },
  {
    content:
      "L'argent rend votre vie plus facile. Si vous avez la chance de l'avoir, vous êtes chanceux.",
    name: "Steve Mark",
    title: "Fondateur et Leader",
    img: "avatars/avatar2.jpg",
  },
  {
    content:
      "Ce sont généralement les personnes dans les affaires, la finance et le commerce international qui sont vraiment riches.",
    name: "Kenn Gallagher",
    title: "Fondateur et Leader",
    img: "avatars/avatar3.jpg",
  },
];
const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

const Testimonials: React.FC<TestimonialsProps> = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative  `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] left-20 top-0 blue__gradient" />

    <div className="w-full flex  justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Quelques Témoignages <br className="sm:block hidden" /> à notre sujet
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px] text-white`}>
          Tout ce dont vous avez besoin pour accepter les paiements par carte et développer votre entreprise n'importe où sur la planète.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap  justify-center group w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard {...card} />)}
    </div>
    <Services className1='right-16 bottom-16 filter blur-xl' className2=' bottom-16 left-16 filter blur-xl' className3='filter blur-xl'/>

  </section>
);

export default Testimonials;
