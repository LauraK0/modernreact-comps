import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "ksjf",
      label: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      id: "asjf",
      label: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      id: "ksxf",
      label: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
