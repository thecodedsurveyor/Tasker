import Button from "../ui/Button";
import Input from "../ui/Input";

const Newsletter = () => {
  return (
    <section className="bg-gray-200">
      <div className="relative overflow-hidden p-8 xl:p-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/20"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500/20"></div>
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10"></div>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="text-center">
            {/* Icon */}
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Header */}
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl">
              Stay in the Loop
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Get the latest insights on productivity, team collaboration, and
              project management delivered to your inbox.
            </p>

            {/* Stats */}
            <div className="mb-12 flex flex-wrap justify-center gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Active Subscribers</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gray-900">Weekly</div>
                <div className="text-sm text-gray-600">Newsletter</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gray-900">0%</div>
                <div className="text-sm text-gray-600">Spam</div>
              </div>
            </div>

            {/* Form */}
            <div className="mx-auto max-w-md">
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-6 py-4 text-gray-900 placeholder-gray-500 transition-all focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Subscribe Now
                  </Button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:scale-110 hover:bg-blue-100 hover:text-blue-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:scale-110 hover:bg-blue-100 hover:text-blue-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:scale-110 hover:bg-blue-100 hover:text-blue-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
