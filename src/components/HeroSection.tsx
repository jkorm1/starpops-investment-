import Image from "next/image";

export default function HeroSection({
  onShowTerms,
}: {
  onShowTerms: () => void;
}) {
  return (
    <div
      id="home"
      className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50"
    >
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/sp.jpg"
                alt="Star Pops Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Star Enterprise
                </h1>
                <p className="text-sm text-gray-600">Star Pops & Star Ice</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#business"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Business
              </a>
              <a
                href="#investment"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Investment
              </a>
              <button
                onClick={onShowTerms}
                className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer"
              >
                Terms
              </button>
              <a
                href="#footer"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Invest in <span className="text-orange-600">Star Enterprise</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Join us in revolutionizing Ghana's snack industry! We're offering a
            unique
            <strong className="text-orange-600">
              {" "}
              profit-sharing partnership
            </strong>{" "}
            where investors earn a percentage of our monthly profits based on
            their investment amount.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover-lift transition-all animate-slide-in-left">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                GHS 43,000
              </div>
              <div className="text-gray-600">Investment Target</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover-lift transition-all animate-fade-in-up">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                7 Months
              </div>
              <div className="text-gray-600">Academic Year</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover-lift transition-all animate-slide-in-right">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                Quarterly Payouts
              </div>
              <div className="text-gray-600">
                Monthly Profits, 3-Month Payouts
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">
              🎯 New Investment Model: Profit-Sharing Partnership
            </h3>
            <p className="text-orange-700">
              Instead of fixed returns, investors receive a percentage of our
              monthly profits, with <strong>quarterly payouts</strong>, until
              they reach their target return. High profit, high return.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
