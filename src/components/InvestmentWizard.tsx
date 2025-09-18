"use client";

import { useState, useEffect } from "react";
import {
  Calculator,
  Download,
  Mail,
  TrendingUp,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import for html2pdf to prevent SSR issues
const generateInvestmentAgreement = async (investorData: any) => {
  const html2pdf = (await import("html2pdf.js")).default;

  const content = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 20px; margin-bottom: 30px;">
        <h1 style="color: #f59e0b; margin: 0;">Star Enterprise</h1>
        <h2 style="color: #374151; margin: 10px 0;">Investment Agreement</h2>
        <p style="color: #6b7280; margin: 0;">7-Month Academic Year Partnership</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h3 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Investor Information</h3>
        <p><strong>Name:</strong> ${investorData.name}</p>
        <p><strong>Email:</strong> ${investorData.email}</p>
        <p><strong>Phone:</strong> ${investorData.phone}</p>
        <p><strong>Investment Amount:</strong> GHS ${investorData.amount.toLocaleString()}</p>
        <p><strong>Investment Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h3 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Investment Terms</h3>
        <p><strong>Investment Model:</strong> 7-Month Academic Year Partnership</p>
        <p><strong>Investment Amount:</strong> GHS ${investorData.amount.toLocaleString()}</p>
                        <p><strong>Target Return:</strong> 1.5x (50% return on investment)</p>
        <p><strong>Payout Schedule:</strong> Half-Yearly (twice a year)</p>
        <p><strong>Minimum Investment:</strong> GHS 1,000</p>
        <p><strong>Investment Target:</strong> GHS {businessData?.investmentTarget?.toLocaleString() || '43,000'}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h3 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Projected Returns (Based on Current Performance)</h3>
        <p><strong>Monthly Return:</strong> GHS ${investorData.monthlyProfitShare.toLocaleString()}</p>
        <p><strong>Monthly Return:</strong> GHS ${investorData.monthlyProfitShare.toLocaleString()}</p>
        <p><strong>Target Return Amount:</strong> GHS ${investorData.targetReturn.toLocaleString()}</p>
        <p><strong>Expected Return Period:</strong> 7 months (academic year)</p>
        </div>
        
        <div style="margin-bottom: 30px;">
        <h3 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Half-Yearly Payout Schedule</h3>
        <p><strong>Monthly Returns:</strong> GHS ${investorData.monthlyProfitShare.toLocaleString()} (accumulated monthly)</p>
        <p><strong>Half-Yearly Payout:</strong> GHS ${(
          investorData.monthlyProfitShare * 3.5
        ).toLocaleString()} (every 3.5 months)</p>
        <p><strong>Total Payouts:</strong> 2 half-yearly payments</p>
        <p><strong>Final Payout:</strong> Month 7 (completing 1.5x return)</p>
        <p><em>Note: Monthly returns accumulate and are paid out twice a year</em></p>
        </div>

        <div style="margin-bottom: 30px;">
        <h3 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Business Overview</h3>
        <p><strong>Star Pops (Popcorn Business):</strong></p>
        <ul>
          <li>2 Stands + Retail/Door-to-Door Sales</li>
          <li>Projected Monthly Revenue: GHS 9,600 - 14,000</li>
          <li>Projected Monthly Profit: GHS 5,760 - 8,400</li>
          <li>Projected 12-Month Revenue: GHS 134,400</li>
          <li>Projected 12-Month Profit: GHS 80,640</li>
        </ul>
        <p><strong>Star Ice (Ice Cream Business):</strong></p>
        <ul>
          <li>Single Branch Expansion</li>
          <li>Projected Monthly Revenue: GHS 4,800 - 7,000</li>
          <li>Projected Monthly Profit: GHS 2,400 - 3,500</li>
          <li>Projected 12-Month Revenue: GHS 70,800</li>
          <li>Projected 12-Month Profit: GHS 35,400</li>
        </ul>
        </div>

        <div style="margin-bottom: 30px;">
        <h3 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Important Disclaimers</h3>
        <ul style="color: #dc2626;">
          <li>Returns are performance-based and may vary based on business performance</li>
          <li>Higher business performance = higher returns</li>
          <li>Lower business performance = lower returns</li>
          <li>No guaranteed returns - all returns depend on actual business profits</li>
          <li>Investment involves risk and past performance does not guarantee future results</li>
        </ul>
        </div>

        <div style="margin-bottom: 30px;">
        <h3 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Next Steps - Investment Process</h3>
        <ol>
          <li>Review this agreement carefully</li>
          <li>Email this document to: <strong>starenterprise001@gmail.com</strong></li>
          <li>Include your acceptance and any questions</li>
          <li>Wait for confirmation from Star Enterprise</li>
          <li>Transfer funds only after receiving confirmation</li>
          <li>Keep this document for your records</li>
        </ol>
        </div>

      <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #f59e0b;">
        <p style="color: #6b7280; margin: 0;">Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
        <p style="color: #6b7280; margin: 5px 0;">Star Enterprise - "Feel the Pops & Chills!"</p>
        </div>
      </div>
    `;

  const opt = {
    margin: 1,
    filename: `Star_Enterprise_Investment_Agreement_${investorData.name.replace(
      /\s+/g,
      "_"
    )}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // Create a temporary div element to hold the content
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;
  document.body.appendChild(tempDiv);

  html2pdf()
    .set(opt)
    .from(tempDiv)
    .save()
    .then(() => {
      document.body.removeChild(tempDiv);
    });
};

export default function InvestmentWizard({
  onShowTerms,
}: {
  onShowTerms: () => void;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: 1000,
  });
  const [businessData, setBusinessData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const response = await fetch("/business-data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch business data");
        }
        const data = await response.json();
        setBusinessData(data);
      } catch (err) {
        console.error("Error fetching business data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, []);

  const calculateProfitShare = (amount: number) => {
    if (amount >= 1000 && amount < 5000) return 0.5;
    if (amount >= 5000 && amount < 10000) return 1.5;
    if (amount >= 10000 && amount < 20000) return 3.5;
    if (amount >= 20000 && amount < 35000) return 5.5;
    if (amount >= 35000 && amount <= 43000) return 7;
    return 0;
  };

  const calculateTargetReturn = (amount: number) => {
    return amount * 1.5; // 1.5x return
  };

  const calculateMonthlyProfitShare = (
    amount: number,
    profitSharePercentage: number
  ) => {
    // Calculate monthly return for 7-month academic year fixed returns model
    const targetReturn = amount * 1.5;
    return targetReturn / 7; // Monthly return over 7 months (academic year)
  };

  // No quarterly calculation needed for 12-month fixed returns model

  const profitSharePercentage = calculateProfitShare(formData.amount);
  const targetReturn = calculateTargetReturn(formData.amount);
  const monthlyProfitShare = calculateMonthlyProfitShare(
    formData.amount,
    profitSharePercentage
  );
  // No quarterly profit share needed for 12-month fixed returns model

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleGenerateAgreement = () => {
    generateInvestmentAgreement({
      ...formData,
      profitSharePercentage,
      targetReturn,
      monthlyProfitShare,
    });
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2">
            <RefreshCw className="w-6 h-6 text-orange-500 animate-spin" />
            <span className="text-gray-600">Loading business data...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="investment"
      className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Investment Returns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your investment amount to see your personalized 7-month
            returns calculation with guaranteed 1.5x returns.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Amount (GHS) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1000"
                    max="43000"
                    value={formData.amount}
                    onChange={(e) =>
                      handleInputChange(
                        "amount",
                        parseInt(e.target.value) || 1000
                      )
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Minimum: GHS 1,000"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Minimum: GHS{" "}
                    {businessData?.performanceMetrics?.minimumInvestment?.toLocaleString() ||
                      "1,000"}{" "}
                    | Maximum: GHS{" "}
                    {businessData?.investmentTarget?.toLocaleString() ||
                      "43,000"}
                  </p>
                </div>
              </div>

              {/* Performance Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">
                      Performance-Based Returns
                    </h4>
                    <p className="text-sm text-yellow-700">
                      Your returns are calculated based on our current business
                      performance.
                      <strong>
                        {" "}
                        Higher business performance = higher returns. Lower
                        business performance = lower returns.
                      </strong>
                      No guaranteed returns - all returns depend on actual
                      business profits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                  Calculate My Returns
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-8">
              {/* Investment Summary */}
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Your Investment Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-orange-100">Investment Amount</p>
                    <p className="text-2xl font-bold">
                      GHS {formData.amount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-orange-100">Investment Amount</p>
                    <p className="text-2xl font-bold">
                      GHS {formData.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Returns Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Monthly Return
                  </h4>
                  <p className="text-2xl font-bold text-green-600">
                    GHS {monthlyProfitShare.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Fixed monthly amount
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <Calculator className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Half-Yearly Payout
                  </h4>
                  <p className="text-2xl font-bold text-blue-600">
                    GHS {(monthlyProfitShare * 3.5).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Every 3.5 months</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <Mail className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Target Return
                  </h4>
                  <p className="text-2xl font-bold text-purple-600">
                    GHS {targetReturn.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    1.5x your investment
                  </p>
                </div>
              </div>

              {/* Performance Disclaimer */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">
                      Important: Guaranteed Returns Model
                    </h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>
                        • Returns are guaranteed at 1.5x your investment amount
                      </li>
                      <li>• Half-yearly payouts (twice a year)</li>
                      <li>• Fixed timeline with predictable returns</li>
                      <li>• Business expansion funded by investment capital</li>
                      <li>• Sustainable growth model for long-term success</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGenerateAgreement}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Investment Agreement</span>
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                >
                  Back to Calculator
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Need to review our terms?{" "}
                  <button
                    onClick={onShowTerms}
                    className="text-orange-600 hover:text-orange-700 font-medium underline"
                  >
                    View Terms & Conditions
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
