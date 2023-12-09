import Layout from "@/components/Layots/RootLayot";
import React, { useState } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

interface FAQProps {
  faqData: FAQItem[];
}

const FAQ= () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is Dream Furniture Bd all about?",
      id: 1,
      answer:
        "Dream Furniture BD is a modern and practical furniture brand that offers a wide range of products for both home and office .Dream Furniture believe that is not only functional but also reflects your style and intelligence.",
    },
    {
      id: 2,
      question: "Where is Dream Furniture Bd located?",
      answer:
        "Dream Furniture BD is a furniture Brand in Bangladesh. Located in Dream Furniture Bd., Khan Mansion, Labni Point, Basila Bridge Road, Mohammadpur, Dhaka-1312. Providing any kind of premade or custom furniture you need.",
    },
    {
      id: 3,
      question: "What types of furniture does Dream Furniture Bd offer?",
      answer:
        "Dream furniture BD you will find all types of domestic and foreign attractive designs,100% quality furniture decorate your office and Home according to your Choice.",
    },
    {
      id: 4,
      question: "Are the furniture pieces at Dream Furniture Bd high-quality?",
      answer:
        "Dream Furniture Bd is a furniture brand that offers high-quality furniture. The company is committed to safety, quality, design, and value, and their furniture is designed for parents who want long-lasting, high-quality furniture that is functional, versatile, and safe.",
    },
    {
      id: 5,
      question: "Can I customize my furniture order at Dream Furniture Bd?",
      answer:
        "Dream Furniture Bd offers customization options for furniture orders. The search results do not provide specific information about customization services offered by Dream Furniture Bd. ",
    },
    {
      id: 6,
      question: "Does Dream Furniture Bd offer any warranty on their products?",
      answer:
        "about warranty policies, it is recommended to visit the official website of Dream Furniture Bd or contact their customer service directly.",
    },
    {
      id: 7,
      question: "What payment methods are accepted by Dream Furniture Bd?",
      answer:
        "The accepted payment methods for Dream Furniture BD.It is recommended to visit our official website or contact our customer service directly to inquire about the accepted payment methods.",
    },
    {
      id: 8,
      question: "How can I contact the customer service team at Dream Furniture Bd?",
      answer: "However, it is common for businesses to provide contact information on Dream Furniture BD official website.Therefore, it is recommended to visit our website and look for a  or Customer Service page where you can find our contact details such as phone number, email address, or online contact form.",
    },
  
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="container   px-10 my-20 ">
      <div>
        <h1 className="mb-4 text-center my-9 text-3xl font-bold dark:text-white">
          {" "}
          Frequently Asked Questions{" "}
        </h1>
      </div>

      <div className="mb-7">
        {faqData.map((item) => (
          <div key={item.id} className="mb-4">
            <button
              className="flex justify-between w-full py-2 px-4 bg-gray-200 rounded-md focus:outline-none"
              onClick={() => toggleItem(item.id)}
            >
              <h2 className="text-xl font-semibold">{item.question}</h2>
              <svg
                className={`w-6 h-6 transition-transform duration-300 transform ${
                  openItem === item.id ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 15L12 9L6 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openItem === item.id && <p className="mt-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;



FAQ.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
