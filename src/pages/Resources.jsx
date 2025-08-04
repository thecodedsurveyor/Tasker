import { usePageTitle } from "../hooks/usePageTitle";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Footer from "../components/sections/Footer";

const Resources = () => {
  usePageTitle("Resources");
  const resources = [
    {
      title: "Getting Started Guide",
      description:
        "Learn the basics of Tasker and get your team up and running quickly.",
      type: "Guide",
      readTime: "5 min read",
      icon: "📚",
      color: "bg-blue-500",
    },
    {
      title: "Best Practices for Task Management",
      description:
        "Discover proven strategies to optimize your workflow and boost productivity.",
      type: "Article",
      readTime: "8 min read",
      icon: "⚡",
      color: "bg-green-500",
    },
    {
      title: "Team Collaboration Tips",
      description:
        "Learn how to foster better teamwork and communication in remote environments.",
      type: "Article",
      readTime: "6 min read",
      icon: "🤝",
      color: "bg-purple-500",
    },
    {
      title: "Advanced Features Tutorial",
      description:
        "Master advanced features like automation, integrations, and analytics.",
      type: "Tutorial",
      readTime: "12 min read",
      icon: "🎯",
      color: "bg-orange-500",
    },
  ];

  const webinars = [
    {
      title: "Productivity Masterclass",
      date: "March 15, 2024",
      duration: "45 min",
      speaker: "Sarah Johnson, Productivity Expert",
    },
    {
      title: "Remote Team Management",
      date: "March 22, 2024",
      duration: "60 min",
      speaker: "Mike Chen, Team Lead",
    },
    {
      title: "Project Planning Strategies",
      date: "March 29, 2024",
      duration: "50 min",
      speaker: "Emily Davis, Project Manager",
    },
  ];

  const templates = [
    {
      name: "Sprint Planning Template",
      category: "Development",
      downloads: "2.3k",
    },
    {
      name: "Marketing Campaign Tracker",
      category: "Marketing",
      downloads: "1.8k",
    },
    {
      name: "Project Kickoff Checklist",
      category: "Project Management",
      downloads: "3.1k",
    },
    {
      name: "Team Retrospective Template",
      category: "Team Building",
      downloads: "1.5k",
    },
  ];

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary lg:text-6xl">
              Resources & Learning
            </h1>
            <p className="mb-8 text-xl text-text-secondary">
              Everything you need to master task management and maximize your
              team's productivity.
            </p>
            <p className="text-lg text-text-tertiary">
              From beginner guides to advanced tutorials, discover insights that
              will transform your workflow.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Featured Resources
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Start with these essential guides and articles to get the most out
              of Tasker.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {resources.map((resource, index) => (
              <Card key={index} className="p-8">
                <div className="mb-4 text-3xl">{resource.icon}</div>
                <div className="mb-4 flex items-center space-x-2">
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-600">
                    {resource.type}
                  </span>
                  <span className="text-sm text-text-tertiary">
                    {resource.readTime}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-text-primary">
                  {resource.title}
                </h3>
                <p className="mb-6 text-text-secondary">
                  {resource.description}
                </p>
                <Button variant="outline" className="w-full">
                  Read Now
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Webinars Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Upcoming Webinars
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Join live sessions with industry experts and learn from real-world
              experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webinars.map((webinar, index) => (
              <Card key={index} className="p-6">
                <h3 className="mb-3 text-lg font-bold text-text-primary">
                  {webinar.title}
                </h3>
                <div className="mb-4 space-y-1 text-sm text-text-secondary">
                  <p>📅 {webinar.date}</p>
                  <p>⏱️ {webinar.duration}</p>
                  <p>👤 {webinar.speaker}</p>
                </div>
                <Button variant="outline" className="w-full">
                  Register Now
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Templates Section */}
      <section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Free Templates
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Ready-to-use templates to jumpstart your projects and workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {templates.map((template, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="mb-4 text-2xl">📋</div>
                <h3 className="mb-2 text-lg font-bold text-text-primary">
                  {template.name}
                </h3>
                <p className="mb-3 text-sm text-text-secondary">
                  {template.category}
                </p>
                <p className="mb-4 text-xs text-text-tertiary">
                  {template.downloads} downloads
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Community Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
                Join Our Community
              </h2>
              <p className="mb-6 text-lg text-text-secondary">
                Connect with other Tasker users, share best practices, and get
                help from our community of experts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    💬
                  </div>
                  <span className="text-text-secondary">Community Forum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    📧
                  </div>
                  <span className="text-text-secondary">Email Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    📚
                  </div>
                  <span className="text-text-secondary">Knowledge Base</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="./images/lady-laptop.svg"
                alt="Community illustration"
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
              Stay Updated with Latest Resources
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
              Get notified about new guides, webinars, and productivity tips
              delivered to your inbox.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg">
                Subscribe to Newsletter
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-500"
              >
                Browse All Resources
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
