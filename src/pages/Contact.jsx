import { usePageTitle } from "../hooks/usePageTitle";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Footer from "../components/sections/Footer";

const Contact = () => {
  usePageTitle("Contact Us");
  
  const contactMethods = [
    {
      title: "Sales",
      description: "Speak with our sales team about your business needs.",
      email: "sales@tasker.com",
      phone: "+1 (555) 123-4567",
      icon: "💼",
    },
    {
      title: "Support",
      description: "Get help with your account or technical issues.",
      email: "support@tasker.com",
      phone: "+1 (555) 987-6543",
      icon: "🛠️",
    },
    {
      title: "Partnerships",
      description: "Interested in partnering with Tasker?",
      email: "partnerships@tasker.com",
      phone: "+1 (555) 456-7890",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mb-8 text-xl text-text-secondary">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="mb-6 text-2xl font-bold text-text-primary">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                    fullWidth
                  />
                  <Input
                    label="Last Name"
                    placeholder="Enter your last name"
                    fullWidth
                  />
                </div>

                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  fullWidth
                />

                <Input
                  label="Company"
                  placeholder="Enter your company name"
                  fullWidth
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">
                    Subject
                  </label>
                  <select className="w-full rounded-md border border-neutral-300 bg-background-primary px-4 py-2 text-text-primary focus:border-primary-500 focus:ring-2 focus:ring-primary-500">
                    <option>General Inquiry</option>
                    <option>Sales Question</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full resize-none rounded-md border border-neutral-300 bg-background-primary px-4 py-2 text-text-primary focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" fullWidth>
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-text-primary">
                  Contact Information
                </h2>
                <p className="mb-8 text-text-secondary">
                  We&apos;re here to help and answer any questions you might
                  have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-text-primary">
                          {method.title}
                        </h3>
                        <p className="mb-3 text-text-secondary">
                          {method.description}
                        </p>
                        <div className="space-y-1">
                          <p className="text-text-primary">
                            <span className="font-medium">Email:</span>{" "}
                            <a
                              href={`mailto:${method.email}`}
                              className="text-primary-500 hover:text-primary-600"
                            >
                              {method.email}
                            </a>
                          </p>
                          <p className="text-text-primary">
                            <span className="font-medium">Phone:</span>{" "}
                            <a
                              href={`tel:${method.phone}`}
                              className="text-primary-500 hover:text-primary-600"
                            >
                              {method.phone}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Office Location */}
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-bold text-text-primary">
                  Office Location
                </h3>
                <div className="space-y-2 text-text-secondary">
                  <p>Tasker Inc.</p>
                  <p>123 Innovation Drive</p>
                  <p>San Francisco, CA 94105</p>
                  <p>United States</p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Can&apos;t find what you&apos;re looking for? Check out our FAQ or
              contact our support team.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <Card>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                How quickly do you respond?
              </h3>
              <p className="text-text-secondary">
                We typically respond to all inquiries within 24 hours during
                business days.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                Do you offer phone support?
              </h3>
              <p className="text-text-secondary">
                Yes, we offer phone support for Pro and Enterprise customers
                during business hours.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                Can I schedule a demo?
              </h3>
              <p className="text-text-secondary">
                Absolutely! Our sales team would be happy to schedule a
                personalized demo for your team.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                What are your business hours?
              </h3>
              <p className="text-text-secondary">
                Our support team is available Monday-Friday, 9 AM - 6 PM PST.
              </p>
            </Card>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
