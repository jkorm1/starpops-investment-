"use client";

import { useState } from "react";
import { Calculator, FileText, Download, Mail } from "lucide-react";

interface InvestmentForm {
  investorName: string;
  investorEmail: string;
  investorPhone: string;
  investmentAmount: number;
  profitSharePercentage: number;
  targetReturn: number;
  monthlyProfitShare: number;
  quarterlyProfitShare: number;
  termsAccepted: boolean;
}

export default function InvestmentWizard({
  onShowTerms,
}: {
  onShowTerms: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<InvestmentForm>({
    investorName: "",
    investorEmail: "",
    investorPhone: "",
    investmentAmount: 0,
    profitSharePercentage: 0,
    targetReturn: 0,
    monthlyProfitShare: 0,
    quarterlyProfitShare: 0,
    termsAccepted: false,
  });

  const calculateProfitShare = (amount: number): number => {
    if (amount < 1000) return 0;
    if (amount <= 5000) return (amount / 1000) * 0.5;
    if (amount <= 15000) return 2.5 + ((amount - 5000) / 10000) * 1.5;
    if (amount <= 25000) return 4 + ((amount - 15000) / 10000) * 1;
    if (amount <= 43000) return 5 + ((amount - 25000) / 18000) * 2;
    return 7;
  };

  const calculateTargetReturn = (amount: number): number => {
    return amount * 1.2; // 20% target return
  };

  const calculateMonthlyProfitShare = (
    amount: number,
    profitShare: number
  ): number => {
    const projectedMonthlyProfit = 6428; // Star Pops + Star Ice
    return (profitShare / 100) * projectedMonthlyProfit;
  };

  const calculateQuarterlyProfitShare = (
    amount: number,
    profitShare: number
  ): number => {
    const projectedQuarterlyProfit = 6428 * 3; // 3 months
    return (profitShare / 100) * projectedQuarterlyProfit;
  };

  const handleAmountChange = (amount: number) => {
    const profitShare = calculateProfitShare(amount);
    const targetReturn = calculateTargetReturn(amount);
    const monthlyProfitShare = calculateMonthlyProfitShare(amount, profitShare);
    const quarterlyProfitShare = calculateQuarterlyProfitShare(
      amount,
      profitShare
    );
    setFormData((prev) => ({
      ...prev,
      investmentAmount: amount,
      profitSharePercentage: profitShare,
      targetReturn: targetReturn,
      monthlyProfitShare: monthlyProfitShare,
      quarterlyProfitShare: quarterlyProfitShare,
    }));
  };

  const generateInvestmentAgreement = async () => {
    try {
      const html2pdf = (await import("html2pdf.js")).default;

      const agreementHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 20px; margin-bottom: 30px;">
            <div style="margin-bottom: 20px;">
              <img src="/sp.jpg" alt="Star Enterprise Logo" style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid #f59e0b;" />
            </div>
            <h1 style="color: #f59e0b; margin: 0;">STAR ENTERPRISE INVESTMENT AGREEMENT</h1>
            <p style="color: #666; margin: 10px 0;">Profit-Sharing Partnership</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333;">Investment Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Date:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleDateString()}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Investor Name:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${
                  formData.investorName
                }</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Investment Amount:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">GHS ${formData.investmentAmount.toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Profit Share:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.profitSharePercentage.toFixed(
                  1
                )}% of monthly profits</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Target Return:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">GHS ${formData.targetReturn.toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Monthly Profit Share:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">GHS ${formData.monthlyProfitShare.toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Quarterly Payout:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">GHS ${formData.quarterlyProfitShare.toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333;">Investment Model & Payout Schedule</h2>
            <p style="line-height: 1.6; color: #555;">
              This is a <strong>Quarterly Profit-Sharing Partnership</strong> investment in Star Enterprise, 
              which includes both Star Pops (popcorn business) and Star Ice (ice cream business).
            </p>
            <p style="line-height: 1.6; color: #555;">
              <strong>How it works:</strong><br/>
              • You receive ${formData.profitSharePercentage.toFixed(
                1
              )}% of our monthly profits<br/>
              • <strong>Quarterly Payouts:</strong> Every 3 months (March, June, September, December)<br/>
              • <strong>Target Return:</strong> GHS ${formData.targetReturn.toLocaleString()} (20% profit on your investment)<br/>
              • <strong>Performance-adjusted:</strong> High profit, high return; lower profits mean proportionally lower payouts<br/>
              • Investment used for business expansion and equipment
            </p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333;">Contact Information</h2>
            <p style="color: #555;">
              <strong>Company:</strong> Star Enterprise<br/>
              <strong>Contact:</strong> starenterprise001@gmail.com<br/>
              <strong>Founder:</strong> Joseph Korm<br/>
              <strong>Location:</strong> KNUST, Kumasi, Ghana
            </p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333;">Next Steps - Investment Process</h2>
            <div style="background-color: #f0f9ff; border: 1px solid #0ea5e9; padding: 20px; border-radius: 8px;">
              <h3 style="color: #0c4a6e; margin-top: 0;">📋 Complete Investment Process</h3>
              <ol style="color: #0c4a6e; line-height: 1.8;">
                <li><strong>Download this agreement</strong> - Save this PDF to your device</li>
                <li><strong>Email to Star Enterprise</strong> - Send this PDF to: <strong>starenterprise001@gmail.com</strong></li>
                <li><strong>Wait for acceptance</strong> - We will review and accept your investment within 48 hours</li>
                <li><strong>Receive bank details</strong> - After acceptance, we'll send you our bank account information</li>
                <li><strong>Transfer funds</strong> - Send your investment amount to the provided account</li>
                <li><strong>Confirmation</strong> - We'll confirm receipt and start your profit-sharing from the next quarter</li>
              </ol>
              
              <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px; margin-top: 15px;">
                <p style="color: #92400e; margin: 0; font-weight: 600;">
                  ⚠️ IMPORTANT: Do NOT send money until you receive our acceptance email with bank details!
                </p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              This agreement represents a quarterly profit-sharing partnership and is not a loan or equity investment.<br/>
              Returns are based on actual business performance and are not guaranteed.
            </p>
          </div>
        </div>
      `;

      const element = document.createElement("div");
      element.innerHTML = agreementHTML;
      document.body.appendChild(element);

      const opt = {
        margin: 1,
        filename: `star-enterprise-investment-${formData.investorName.replace(
          /\s+/g,
          "-"
        )}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      await html2pdf().set(opt).from(element).save();
      document.body.removeChild(element);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      generateInvestmentAgreement();
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section id="investment" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment Wizard
          </h2>
          <p className="text-xl text-gray-600">
            Calculate your quarterly profit share and generate your investment
            agreement
          </p>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-blue-800 text-sm">
              💡 <strong>Quarterly Payout System:</strong> Investors receive
              payouts every 3 months based on actual business profits. This
              reduces pressure on the business while ensuring regular returns
              for investors.
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of 3
            </span>
            <span className="text-sm text-gray-500">
              {currentStep === 1 && "Personal Details"}
              {currentStep === 2 && "Investment Amount"}
              {currentStep === 3 && "Review & Generate"}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Personal Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.investorName}
                    onChange={(e) =>
                      setFormData({ ...formData, investorName: e.target.value })
                    }
                    className="input-field"
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
                    value={formData.investorEmail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        investorEmail: e.target.value,
                      })
                    }
                    className="input-field"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.investorPhone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        investorPhone: e.target.value,
                      })
                    }
                    className="input-field"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      !formData.investorName ||
                      !formData.investorEmail ||
                      !formData.investorPhone
                    }
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Investment Amount */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Investment Amount
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Amount (GHS) *
                  </label>
                  <input
                    type="number"
                    required
                    min={1000}
                    max={43000}
                    step={100}
                    value={formData.investmentAmount || ""}
                    onChange={(e) => handleAmountChange(Number(e.target.value))}
                    className="input-field"
                    placeholder="Enter amount between GHS 1,000 - 43,000"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Minimum: GHS 1,000 | Maximum: GHS 43,000
                  </p>
                </div>

                {formData.investmentAmount > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-4">
                      Investment Summary
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-blue-600">
                          Profit Share Percentage
                        </div>
                        <div className="text-2xl font-bold text-blue-800">
                          {formData.profitSharePercentage.toFixed(1)}%
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-600">
                          Target Return
                        </div>
                        <div className="text-2xl font-bold text-blue-800">
                          GHS {formData.targetReturn.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-600">
                          Monthly Profit Share
                        </div>
                        <div className="text-2xl font-bold text-blue-800">
                          GHS {formData.monthlyProfitShare.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-600">
                          Quarterly Payout
                        </div>
                        <div className="text-2xl font-bold text-blue-800">
                          GHS {formData.quarterlyProfitShare.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">
                        📅 Payout Schedule
                      </h5>
                      <div className="text-sm text-green-700 space-y-1">
                        <p>
                          • <strong>Monthly:</strong> You earn{" "}
                          {formData.profitSharePercentage.toFixed(1)}% of our
                          monthly profits
                        </p>
                        <p>
                          • <strong>Quarterly:</strong> Payout every 3 months
                          (March, June, September, December)
                        </p>
                        <p>
                          • <strong>Target:</strong> Continue until you receive
                          GHS {formData.targetReturn.toLocaleString()} total
                        </p>
                        <p>
                          • <strong>Performance-adjusted:</strong> High profit,
                          high return; lower profits mean proportionally lower
                          payouts
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4 flex space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary flex-1"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={formData.investmentAmount < 1000}
                    className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Generate */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Review & Generate Agreement
                </h3>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Investment Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Investor Name:</span>
                      <span className="font-medium">
                        {formData.investorName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">
                        {formData.investorEmail}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">
                        {formData.investorPhone}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Investment Amount:</span>
                      <span className="font-medium">
                        GHS {formData.investmentAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Profit Share:</span>
                      <span className="font-medium">
                        {formData.profitSharePercentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target Return:</span>
                      <span className="font-medium">
                        GHS {formData.targetReturn.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quarterly Payout:</span>
                      <span className="font-medium">
                        GHS {formData.quarterlyProfitShare.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    Important Notes
                  </h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>
                      • This is a quarterly profit-sharing partnership, not a
                      loan
                    </li>
                    <li>• Returns are based on actual business performance</li>
                    <li>
                      • Payouts every 3 months (March, June, September,
                      December)
                    </li>
                    <li>
                      • Performance-adjusted: high profit, high return; lower
                      profits reduce payouts
                    </li>
                    <li>• Investment will be used for business expansion</li>
                  </ul>
                </div>

                <div className="pt-4 flex space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary flex-1"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Generate & Download Agreement</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Terms Link */}
        <div className="text-center mt-8">
          <button
            onClick={onShowTerms}
            className="text-orange-600 hover:text-orange-700 font-medium flex items-center justify-center space-x-2 mx-auto"
          >
            <FileText className="w-5 h-5" />
            <span>View Terms & Conditions</span>
          </button>
        </div>
      </div>
    </section>
  );
}
