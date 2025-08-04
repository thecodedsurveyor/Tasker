import { usePageTitle } from "../hooks/usePageTitle";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Footer from "../components/sections/Footer";

const Pricing = () => {
  usePageTitle("Pricing Plans");
  
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals and small teams getting started.",
      features: [
        "Up to 5 team members",
        "Basic task management",
        "Simple project boards",
        "Email support",
        "1GB storage",
      ],
      popular: false,
      cta: "Get Started Free",
      variant: "outline",
    },
    {
      name: "Pro",
      price: "$12",
      period: "per user/month",
      description: "Best for growing teams that need more power and features.",
      features: [
        "Unlimited team members",
        "Advanced task management",
        "Custom project templates",
        "Priority support",
        "10GB storage",
        "Time tracking",
        "Advanced reporting",
        "Integrations",
      ],
      popular: true,
      cta: "Start Free Trial",
      variant: "primary",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description:
        "For large organizations with advanced security and compliance needs.",
      features: [
        "Everything in Pro",
        "Advanced security",
        "SSO & SAML",
        "Custom integrations",
        "Dedicated support",
        "Unlimited storage",
        "Advanced analytics",
        "Custom branding",
      ],
      popular: false,
      cta: "Contact Sales",
      variant: "outline",
    },
  ];

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Hero Section */}
      <section className="bg-background-primary py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mb-8 text-xl text-text-secondary">
              Choose the plan that&apos;s right for your team. All plans include
              a 14-day free trial.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-text-secondary">Monthly</span>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  id="billing-toggle"
                />
                <label
                  htmlFor="billing-toggle"
                  className="flex cursor-pointer items-center"
                >
                  <div className="relative">
                    <div className="h-6 w-12 rounded-full bg-neutral-300 shadow-inner"></div>
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform"></div>
                  </div>
                </label>
              </div>
              <span className="text-text-secondary">Annual (Save 20%)</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "scale-105 ring-2 ring-primary-500" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <span className="rounded-full bg-primary-500 px-4 py-1 text-sm font-medium text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-text-primary">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-text-primary">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-text-secondary">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-text-secondary">{plan.description}</p>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="mr-3 h-5 w-5 flex-shrink-0 text-secondary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.variant}
                  size="lg"
                  fullWidth
                  className={
                    plan.popular ? "bg-primary-500 hover:bg-primary-600" : ""
                  }
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
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
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            <Card>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                Can I change plans anytime?
              </h3>
              <p className="text-text-secondary">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                What&apos;s included in the free trial?
              </h3>
              <p className="text-text-secondary">
                The free trial includes all Pro features for 14 days. No credit
                card required to start.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                Do you offer refunds?
              </h3>
              <p className="text-text-secondary">
                We offer a 30-day money-back guarantee. If you&apos;re not
                satisfied, we&apos;ll refund your payment.
              </p>
            </Card>

            <Card>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                Is there a setup fee?
              </h3>
              <p className="text-text-secondary">
                No setup fees. You only pay for the plan you choose, with no
                hidden costs.
              </p>
            </Card>
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

export default Pricing;
