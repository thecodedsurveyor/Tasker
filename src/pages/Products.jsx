import { usePageTitle } from "../hooks/usePageTitle";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Footer from "../components/sections/Footer";

const Products = () => {
  usePageTitle("Products & Features");
  
  const products = [
    {
      title: "Task Management",
      description:
        "Create, assign, and track tasks with intelligent prioritization and deadline management.",
      features: [
        "Smart task prioritization",
        "Deadline tracking",
        "Progress monitoring",
        "Automated reminders",
      ],
      icon: "./images/tasks.svg",
      color: "bg-red-500",
    },
    {
      title: "Team Collaboration",
      description:
        "Foster teamwork with integrated communication tools and collaborative workspaces.",
      features: [
        "Real-time messaging",
        "File sharing",
        "Team workspaces",
        "Comment threads",
      ],
      icon: "./images/chat.svg",
      color: "bg-yellow-500",
    },
    {
      title: "Time Tracking",
      description:
        "Monitor project timelines and optimize resource allocation with detailed analytics.",
      features: [
        "Time logging",
        "Project timelines",
        "Resource analytics",
        "Performance reports",
      ],
      icon: "./images/clock.svg",
      color: "bg-blue-500",
    },
    {
      title: "Project Analytics",
      description:
        "Leverage data-driven insights to identify bottlenecks and optimize processes.",
      features: [
        "Performance metrics",
        "Bottleneck identification",
        "Process optimization",
        "Custom reports",
      ],
      icon: "./images/dna.svg",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary lg:text-6xl">
              Our Products
            </h1>
            <p className="mb-8 text-xl text-text-secondary">
              Comprehensive task management solutions designed to streamline
              your workflow and boost team productivity.
            </p>
            <p className="text-lg text-text-tertiary">
              From individual task tracking to enterprise-level project
              management, our suite of tools adapts to your needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Core Product Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Everything you need to manage tasks, collaborate with teams, and
              achieve your project goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {products.map((product, index) => (
              <Card key={index} className="p-8">
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg ${product.color} p-3`}
                >
                  <img
                    src={product.icon}
                    alt={product.title}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-text-primary">
                  {product.title}
                </h3>
                <p className="mb-6 text-text-secondary">
                  {product.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
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
                      {feature}
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

      {/* Integration Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
                Seamless Integrations
              </h2>
              <p className="mb-6 text-lg text-text-secondary">
                Connect Tasker with your existing tools and workflows. Our
                platform integrates with popular services to ensure a smooth
                transition.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded bg-blue-100"></div>
                  <span className="text-text-secondary">Slack</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded bg-green-100"></div>
                  <span className="text-text-secondary">Microsoft Teams</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded bg-yellow-100"></div>
                  <span className="text-text-secondary">Google Workspace</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded bg-purple-100"></div>
                  <span className="text-text-secondary">GitHub</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="./images/hero-img.svg"
                alt="Integrations illustration"
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
              Ready to Transform Your Workflow?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
              Start your free trial today and experience the power of
              intelligent task management.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg">
                Start Free Trial
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

export default Products;
