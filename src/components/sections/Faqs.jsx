import { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Tasker handle team collaboration?",
      answer:
        "Tasker provides real-time collaboration features including shared workspaces, instant messaging, file sharing, and collaborative editing. Team members can comment on tasks, tag colleagues, and receive notifications for updates, ensuring everyone stays connected and informed throughout the project lifecycle.",
    },
    {
      question: "Can I integrate Tasker with other tools I'm already using?",
      answer:
        "Yes! Tasker offers extensive integration capabilities with popular tools like Slack, Microsoft Teams, Google Workspace, GitHub, Jira, and many more. Our API also allows for custom integrations, so you can connect Tasker with your existing workflow tools seamlessly.",
    },
    {
      question: "What kind of analytics and reporting does Tasker provide?",
      answer:
        "Tasker offers comprehensive analytics including project progress tracking, team performance metrics, time tracking insights, and customizable reports. You can view productivity trends, identify bottlenecks, and generate detailed reports for stakeholders or team reviews.",
    },
    {
      question: "Is my data secure with Tasker?",
      answer:
        "Absolutely. We implement enterprise-grade security measures including end-to-end encryption, regular security audits, SOC 2 compliance, and GDPR compliance. Your data is stored in secure, redundant cloud infrastructure with 99.9% uptime guarantee.",
    },
    {
      question: "How does Tasker's pricing work for different team sizes?",
      answer:
        "Tasker offers flexible pricing plans starting with a free tier for individuals and small teams. As your team grows, you can upgrade to Professional or Enterprise plans with advanced features, priority support, and custom integrations. We also offer volume discounts for larger organizations.",
    },
    {
      question: "Can I customize Tasker to match my company's workflow?",
      answer:
        "Yes, Tasker is highly customizable. You can create custom fields, workflows, and automation rules. Set up role-based permissions, customize dashboards, and configure notifications to match your specific business processes and team structure.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-12 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 xl:p-16">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            FAQ
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Everything you need to know about Tasker and how it can transform
            your workflow
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left transition-all duration-300 hover:bg-gray-50"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 lg:text-xl">
                  {faq.question}
                </span>
                <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-blue-100">
                  <svg
                    className={`h-5 w-5 transform text-gray-600 transition-all duration-300 ${
                      openIndex === index ? "rotate-180 text-blue-600" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Animated Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <svg
                        className="h-3 w-3 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="leading-relaxed text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">Still have questions?</h3>
            <p className="mb-6 text-blue-100">
              Our support team is here to help you get the most out of Tasker
            </p>
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-gray-50 hover:shadow-lg"
            >
              Contact Support
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
