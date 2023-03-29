import "./faq.scss";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const Faq = () => {
  const accordionCard = [
    {
      id: 1,
      title: "Is there a free trial available?",
      question:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 2,
      title: "Can i change my plan later?",
      question:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 3,
      title: "Can i change my plan later?",
      question:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 4,
      title: "Do i get certified after taking courses?",
      question:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 5,
      title: "How do i reach out to mentors?",
      question:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
    {
      id: 6,
      title: "Do we get job ready after taking courses?",
      question:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
    },
  ];
  return (
    <section className="faq-main">
      <div className="faq-inner">
        <div className="faq-div1">
          <h1>frequently asked questions</h1>

          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>

        {/*********************************************************************** */}
        <div className="faq-div2">
          <Accordion className="accordion">
            {accordionCard.map((accordionCards, id) => (
              <AccordionItem key={id} className="accordion-item">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton className="accordion-btn">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="box"
                        >
                          {accordionCards.title}
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="accorrdion-panel">
                      {accordionCards.question}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
