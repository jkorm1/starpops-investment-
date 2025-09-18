"use client";

import { useState, useEffect } from "react";
import {
  BarChart3,
  FileText,
  TrendingUp,
  Calendar,
  DollarSign,
  RefreshCw,
} from "lucide-react";
import FinancialStatements from "../../components/reports/FinancialStatements";

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("financial");
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

        // Calculate totals from monthly history
        const calculateTotalsFromMonthlyHistory = (monthlyHistory: any[]) => {
          let totalSales = 0;
          let totalExpenses = 0;
          let totalProfit = 0;
          let totalDaysWorked = 0;
          let totalDaysExpected = 0;

          monthlyHistory.forEach((month) => {
            totalSales += month.sales || 0;
            totalExpenses += month.expenses || 0;
            totalProfit += month.profit || 0;
            totalDaysWorked += month.daysWorked || 0;
            totalDaysExpected += month.daysExpected || 0;
          });

          const profitMargin =
            totalSales > 0 ? (totalProfit / totalSales) * 100 : 0;

          return {
            totalSales,
            totalExpenses,
            totalProfit,
            totalDaysWorked,
            totalDaysExpected,
            profitMargin: Math.round(profitMargin * 10) / 10,
          };
        };

        // Calculate quarterly data from monthly history
        const calculateQuarterlyDataFromMonthly = (monthlyHistory: any[]) => {
          const quarters = [
            {
              name: "Q1 2025",
              months: ["January 2025", "February 2025", "March 2025"],
            },
            {
              name: "Q2 2025",
              months: ["April 2025", "May 2025", "June 2025"],
            },
            {
              name: "Q3 2025",
              months: ["July 2025", "August 2025", "September 2025"],
            },
          ];

          return quarters.map((quarter) => {
            let starPopsSales = 0;
            let starPopsExpenses = 0;
            let starPopsProfit = 0;

            quarter.months.forEach((monthName) => {
              const monthData = monthlyHistory.find(
                (m) => m.month === monthName
              );
              if (monthData) {
                starPopsSales += monthData.sales || 0;
                starPopsExpenses += monthData.expenses || 0;
                starPopsProfit += monthData.profit || 0;
              }
            });

            const totalProfit = starPopsProfit; // Star Ice is 0 for now
            const profitSharingPool =
              totalProfit * (data.performanceMetrics.profitSharingRate / 100);

            return {
              quarter: quarter.name,
              starPopsSales,
              starPopsExpenses,
              starPopsProfit,
              starIceSales: 0,
              starIceExpenses: 0,
              starIceProfit: 0,
              totalProfit,
              profitSharingPool,
              status: quarter.name === "Q3 2025" ? "In Progress" : "Completed",
            };
          });
        };

        // Override the yearToDate with calculated values
        const calculatedYearToDate = calculateTotalsFromMonthlyHistory(
          data.monthlyHistory
        );
        const calculatedQuarterlyData = calculateQuarterlyDataFromMonthly(
          data.monthlyHistory
        );

        // Update the data with calculated values
        data.yearToDate = calculatedYearToDate;
        data.quarterlyData = calculatedQuarterlyData;

        setBusinessData(data);
      } catch (err) {
        console.error("Error fetching business data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-6 h-6 text-blue-500 animate-spin" />
          <span className="text-gray-600">Loading business data...</span>
        </div>
      </div>
    );
  }

  if (!businessData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <p className="text-red-500">Unable to load business data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Business Reports
                </h1>
                <p className="text-sm text-gray-600">
                  Star Enterprise Performance & Financial Data
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-1 mb-8">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab("financial")}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "financial"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Financial Statements
            </button>
            <button
              onClick={() => setActiveTab("performance")}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "performance"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-2" />
              Performance Reports
            </button>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "monthly"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              Monthly Reports
            </button>
            <button
              onClick={() => setActiveTab("investor")}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "investor"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <DollarSign className="w-4 h-4 inline mr-2" />
              Investor Updates
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === "financial" && <FinancialStatements />}

          {activeTab === "performance" && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Performance Reports
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Total Sales
                  </h4>
                  <p className="text-2xl font-bold text-green-600">
                    GHS {businessData.yearToDate.totalSales.toLocaleString()}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-red-800 mb-2">
                    Total Expenses
                  </h4>
                  <p className="text-2xl font-bold text-red-600">
                    GHS {businessData.yearToDate.totalExpenses.toLocaleString()}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Total Profit
                  </h4>
                  <p className="text-2xl font-bold text-blue-600">
                    GHS {businessData.yearToDate.totalProfit.toLocaleString()}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    Profit Margin
                  </h4>
                  <p className="text-2xl font-bold text-purple-600">
                    {businessData.yearToDate.profitMargin}%
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Work Progress:</strong>{" "}
                  {businessData.yearToDate.totalDaysWorked} days worked out of{" "}
                  {businessData.yearToDate.totalDaysExpected} expected days (
                  {(
                    (businessData.yearToDate.totalDaysWorked /
                      businessData.yearToDate.totalDaysExpected) *
                    100
                  ).toFixed(1)}
                  % completion)
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Based on actual business performance from January to September
                  2025
                </p>
              </div>
            </div>
          )}

          {activeTab === "monthly" && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Monthly Reports
              </h3>
              <div className="space-y-6">
                {businessData.monthlyHistory.map(
                  (month: any, index: number) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {month.month}
                        </h4>
                        {month.reason && (
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {month.reason}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-orange-800 mb-2">
                            Sales
                          </h5>
                          <p className="text-sm text-orange-600">
                            GHS {month.sales.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-blue-800 mb-2">
                            Expenses
                          </h5>
                          <p className="text-sm text-blue-600">
                            GHS {month.expenses.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-2">
                            Profit
                          </h5>
                          <p className="text-lg font-bold text-green-600">
                            GHS {month.profit.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-purple-800 mb-2">
                            Days Worked
                          </h5>
                          <p className="text-lg font-bold text-purple-600">
                            {month.daysWorked}/{month.daysExpected}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {activeTab === "investor" && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Investor Updates
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">
                    Current Investment Status
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-blue-700 font-medium">
                        Investment Target
                      </p>
                      <p className="text-2xl font-bold text-blue-800">
                        GHS {businessData.investmentTarget.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">
                        Profit Sharing Rate
                      </p>
                      <p className="text-2xl font-bold text-blue-800">
                        {businessData.performanceMetrics.profitSharingRate}%
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">Target Return</p>
                      <p className="text-2xl font-bold text-blue-800">
                        {businessData.performanceMetrics.targetReturn}x
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium">
                        Payout Schedule
                      </p>
                      <p className="text-2xl font-bold text-blue-800">
                        {businessData.performanceMetrics.payoutSchedule}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">
                    Business Performance Summary
                  </h4>
                  <p className="text-green-700 mb-3">
                    <strong>
                      Year-to-Date Performance (January - September 2025):
                    </strong>
                  </p>
                  <ul className="text-green-700 space-y-2">
                    <li>
                      • Total Sales: GHS{" "}
                      {businessData.yearToDate.totalSales.toLocaleString()}
                    </li>
                    <li>
                      • Total Expenses: GHS{" "}
                      {businessData.yearToDate.totalExpenses.toLocaleString()}
                    </li>
                    <li>
                      • Total Profit: GHS{" "}
                      {businessData.yearToDate.totalProfit.toLocaleString()}
                    </li>
                    <li>
                      • Profit Margin: {businessData.yearToDate.profitMargin}%
                    </li>
                    <li>
                      • Working Days: {businessData.yearToDate.totalDaysWorked}{" "}
                      out of {businessData.yearToDate.totalDaysExpected}{" "}
                      expected
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">
                    Next Steps for Investors
                  </h4>
                  <ol className="text-orange-700 space-y-2">
                    <li>
                      1. Review the financial statements and quarterly reports
                    </li>
                    <li>
                      2. Calculate your potential returns using the investment
                      calculator
                    </li>
                    <li>3. Download your personalized investment agreement</li>
                    <li>
                      4. Email the agreement to starenterprise001@gmail.com
                    </li>
                    <li>5. Wait for confirmation before transferring funds</li>
                  </ol>
                </div>

                <div className="text-center text-gray-600">
                  <p>
                    <strong>Note:</strong> All returns are performance-based and
                    depend on actual business profits.
                  </p>
                  <p className="text-sm mt-2">
                    For detailed questions, contact us at
                    starenterprise001@gmail.com
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
