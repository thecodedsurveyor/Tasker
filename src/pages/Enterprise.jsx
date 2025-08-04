import { usePageTitle } from "../hooks/usePageTitle";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Footer from "../components/sections/Footer";

const Enterprise = () => {
  usePageTitle("Enterprise");
  const enterpriseFeatures = [
    {
      title: "Advanced Security",
      description:
        "Enterprise-grade security with SSO, 2FA, and compliance certifications.",
      features: [
        "Single Sign-On (SSO)",
        "Two-Factor Authentication",
        "SOC 2 Type II",
        "GDPR Compliance",
      ],
      icon: "🔒",
      color: "bg-blue-500",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Built to handle thousands of users and complex organizational structures.",
      features: [
        "Unlimited users",
        "Custom roles",
        "Department management",
        "Global admin controls",
      ],
      icon: "🏢",
      color: "bg-green-500",
    },
    {
      title: "Advanced Analytics",
      description:
        "Comprehensive reporting and insights for data-driven decision making.",
      features: [
        "Custom dashboards",
        "Executive reports",
        "Performance metrics",
        "ROI tracking",
      ],
      icon: "📊",
      color: "bg-purple-500",
    },
    {
      title: "Dedicated Support",
      description:
        "Priority support with dedicated account managers and 24/7 assistance.",
      features: [
        "Dedicated CSM",
        "24/7 phone support",
        "Custom training",
        "Implementation consulting",
      ],
      icon: "🎯",
      color: "bg-orange-500",
    },
  ];

  const industries = [
    {
      name: "Financial Services",
      description:
        "Compliance-focused solutions for banks, insurance, and fintech companies.",
      icon: "💰",
    },
    {
      name: "Healthcare",
      description:
        "HIPAA-compliant task management for hospitals and medical practices.",
      icon: "🏥",
    },
    {
      name: "Government",
      description:
        "Secure solutions meeting federal and state security requirements.",
      icon: "🏛️",
    },
    {
      name: "Manufacturing",
      description:
        "Streamline production planning and quality control processes.",
      icon: "🏭",
    },
  ];

  const testimonials = [
    {
      quote:
        "Tasker Enterprise has transformed how we manage projects across 50+ departments.",
      author: "Jennifer Smith",
      role: "VP of Operations",
      company: "Fortune 500 Tech Company",
    },
    {
      quote:
        "The security features and compliance certifications gave us confidence to deploy enterprise-wide.",
      author: "David Chen",
      role: "CTO",
      company: "Global Financial Institution",
    },
  ];

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary lg:text-6xl">
              Enterprise Solutions
            </h1>
            <p className="mb-8 text-xl text-text-secondary">
              Scalable, secure, and compliant task management for large
              organizations and enterprise teams.
            </p>
            <p className="text-lg text-text-tertiary">
              Built for the enterprise with advanced security, compliance, and
              support that large organizations require.
            </p>
          </div>
        </Container>
      </section>

      {/* Enterprise Features */}
      <section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Enterprise-Grade Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Everything you need to deploy Tasker across your entire
              organization with confidence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="p-8">
                <div className="mb-6 text-3xl">{feature.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mb-6 text-text-secondary">
                  {feature.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-text-secondary"
                    >
                      <svg
                        className="mr-2 h-4 w-4 text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Industry Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Specialized solutions designed for regulated industries and
              complex compliance requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="mb-4 text-4xl">{industry.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-text-primary">
                  {industry.name}
                </h3>
                <p className="text-text-secondary">{industry.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Trusted by Enterprise Leaders
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              See how leading organizations are transforming their operations
              with Tasker Enterprise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="mb-6 text-2xl">💬</div>
                <blockquote className="mb-6 text-lg italic text-text-secondary">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary-500">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Comparison */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
                Enterprise Pricing
              </h2>
              <p className="mb-6 text-lg text-text-secondary">
                Custom pricing designed for your organization's size and
                requirements. Contact our sales team for a personalized quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-text-secondary">
                    Unlimited users and projects
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-text-secondary">
                    Dedicated account manager
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-text-secondary">
                    Custom integrations and API access
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-text-secondary">
                    24/7 priority support
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="./images/hero-img.svg"
                alt="Enterprise pricing illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 py-20">
        <Container>
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Ready for Enterprise?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
              Let our enterprise team help you design the perfect solution for
              your organization.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg">
                Contact Sales
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-500"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;
