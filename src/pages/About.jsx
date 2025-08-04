import { usePageTitle } from "../hooks/usePageTitle";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Footer from "../components/sections/Footer";

const About = () => {
  usePageTitle("About Us");
  
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "./images/profile.svg",
      bio: "Passionate about creating tools that help teams work better together.",
    },
    {
      name: "Sarah Connor",
      role: "CTO",
      image: "./images/sarah.svg",
      bio: "Leading our technical vision and ensuring scalable solutions.",
    },
    {
      name: "Mike Johnson",
      role: "Head of Design",
      image: "./images/profile.svg",
      bio: "Creating beautiful and intuitive user experiences.",
    },
    {
      name: "Emily Davis",
      role: "Head of Product",
      image: "./images/sarah.svg",
      bio: "Driving product strategy and user-centered development.",
    },
  ];

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary lg:text-6xl">
              About Tasker
            </h1>
            <p className="mb-8 text-xl text-text-secondary">
              We&apos;re on a mission to make task management simple, intuitive,
              and powerful for teams everywhere.
            </p>
            <p className="text-lg text-text-tertiary">
              Founded in 2024, Tasker has grown from a simple idea to a
              comprehensive platform that helps thousands of teams stay
              organized and productive.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
                Our Mission
              </h2>
              <p className="mb-6 text-lg text-text-secondary">
                We believe that great teams deserve great tools. Our mission is
                to create the most intuitive and powerful task management
                platform that helps teams focus on what matters most.
              </p>
              <p className="mb-8 text-lg text-text-secondary">
                By combining cutting-edge technology with thoughtful design,
                we&apos;re building a platform that adapts to your workflow, not
                the other way around.
              </p>
              <Button size="lg">Learn More About Our Vision</Button>
            </div>
            <div className="flex justify-center">
              <img
                src="./images/hero-img.svg"
                alt="Mission illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              These core values guide everything we do and every decision we
              make.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <img
                  src="./images/tasks.svg"
                  alt="Simplicity"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                Simplicity
              </h3>
              <p className="text-text-secondary">
                We believe the best tools are invisible. They work so seamlessly
                that you forget they&apos;re there.
              </p>
            </Card>

            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100">
                <img
                  src="./images/chat.svg"
                  alt="Collaboration"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                Collaboration
              </h3>
              <p className="text-text-secondary">
                Great things happen when people work together. We build tools
                that bring teams closer.
              </p>
            </Card>

            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-yellow">
                <img
                  src="./images/clock.svg"
                  alt="Innovation"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                Innovation
              </h3>
              <p className="text-text-secondary">
                We&apos;re constantly exploring new ways to solve old problems
                and create better experiences.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              We&apos;re a diverse team of designers, developers, and product
              thinkers passionate about building great software.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-full"
                />
                <h3 className="mb-2 text-xl font-bold text-text-primary">
                  {member.name}
                </h3>
                <p className="mb-3 font-medium text-primary-500">
                  {member.role}
                </p>
                <p className="text-sm text-text-secondary">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 py-20">
        <Container>
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
              Join thousands of teams who are already using Tasker to stay
              organized and productive.
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
                Contact Sales
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default About;
