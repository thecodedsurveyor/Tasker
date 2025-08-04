import { usePageTitle } from "../hooks/usePageTitle";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Footer from "../components/sections/Footer";

const Solutions = () => {
  usePageTitle("Solutions");
  const solutions = [
    {
      title: "For Development Teams",
      description:
        "Streamline software development workflows with integrated issue tracking, code reviews, and release management.",
      features: [
        "GitHub integration",
        "Code review workflows",
        "Release planning",
        "Bug tracking",
      ],
      icon: "./images/dna.svg",
      color: "bg-blue-500",
    },
    {
      title: "For Marketing Teams",
      description:
        "Coordinate campaigns, track performance, and manage creative workflows across multiple channels.",
      features: [
        "Campaign management",
        "Content calendars",
        "Performance tracking",
        "Team collaboration",
      ],
      icon: "./images/chat.svg",
      color: "bg-green-500",
    },
    {
      title: "For Project Managers",
      description:
        "Oversee complex projects with advanced planning tools, resource allocation, and progress monitoring.",
      features: [
        "Gantt charts",
        "Resource management",
        "Risk assessment",
        "Stakeholder reporting",
      ],
      icon: "./images/tasks.svg",
      color: "bg-purple-500",
    },
    {
      title: "For Remote Teams",
      description:
        "Keep distributed teams connected and productive with asynchronous collaboration and time zone management.",
      features: [
        "Async communication",
        "Time zone coordination",
        "Document sharing",
        "Video integration",
      ],
      icon: "./images/clock.svg",
      color: "bg-orange-500",
    },
  ];

  const industries = [
    {
      name: "Technology",
      description: "Accelerate software development and product launches",
      icon: "💻",
    },
    {
      name: "Healthcare",
      description:
        "Streamline patient care coordination and administrative tasks",
      icon: "🏥",
    },
    {
      name: "Education",
      description: "Enhance student engagement and administrative efficiency",
      icon: "🎓",
    },
    {
      name: "Finance",
      description: "Ensure compliance and optimize financial workflows",
      icon: "💰",
    },
    {
      name: "Manufacturing",
      description: "Improve production planning and quality control processes",
      icon: "🏭",
    },
    {
      name: "Consulting",
      description: "Manage client projects and deliver exceptional results",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary lg:text-6xl">
              Solutions for Every Team
            </h1>
            <p className="mb-8 text-xl text-text-secondary">
              Tailored task management solutions designed to meet the unique
              challenges of different industries and team types.
            </p>
            <p className="text-lg text-text-tertiary">
              Whether you're a startup or enterprise, remote or in-office, we
              have the tools to optimize your workflow.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Team-Specific Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Specialized workflows and features designed for different team
              types and roles.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8">
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg ${solution.color} p-3`}
                >
                  <img
                    src={solution.icon}
                    alt={solution.title}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-text-primary">
                  {solution.title}
                </h3>
                <p className="mb-6 text-text-secondary">
                  {solution.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {solution.features.map((feature, featureIndex) => (
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
                  Explore Solution
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
              Proven solutions that address the specific challenges and
              requirements of different industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Success Stories Section */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
                Success Stories
              </h2>
              <p className="mb-6 text-lg text-text-secondary">
                See how teams across different industries have transformed their
                workflows with Tasker.
              </p>
              <div className="space-y-4">
                <div className="rounded-lg bg-background-primary p-4">
                  <p className="text-text-secondary">
                    "Tasker helped our development team reduce sprint planning
                    time by 60% and improve code review efficiency."
                  </p>
                  <p className="mt-2 font-medium text-text-primary">
                    - TechCorp Engineering Team
                  </p>
                </div>
                <div className="rounded-lg bg-background-primary p-4">
                  <p className="text-text-secondary">
                    "Our marketing campaigns are now more coordinated and our
                    team collaboration has never been better."
                  </p>
                  <p className="mt-2 font-medium text-text-primary">
                    - Growth Marketing Agency
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="./images/rocket-man.svg"
                alt="Success stories illustration"
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
              Find Your Perfect Solution
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
              Let our experts help you identify the best approach for your team
              and industry.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg">
                Get Custom Solution
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-500"
              >
                Talk to Expert
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
