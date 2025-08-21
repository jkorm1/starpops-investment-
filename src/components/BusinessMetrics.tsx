"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function BusinessMetrics() {
  const [activeTab, setActiveTab] = useState("performance");

  // Actual business data from your Excel sheet (7 months, 54 working days)
  const actualData = [
  {
    month: "Jan",
    sales: 0,
      profit: 0,
      days: 0,
    expenses: 0,
      reason: "Business Planning Phase",
  },
  {
    month: "Feb",
    sales: 526,
      profit: -840,
      days: 6,
    expenses: 1366,
      reason: "",
  },
  {
    month: "Mar",
    sales: 552,
      profit: 25,
      days: 6,
    expenses: 527,
      reason: "",
  },
  {
    month: "Apr",
    sales: 1169,
      profit: 969,
      days: 7,
      expenses: 200,
      reason: "",
  },
  {
    month: "May",
    sales: 0,
      profit: 0,
      days: 0,
    expenses: 0,
      reason: "Semester Break",
  },
  {
    month: "Jun",
    sales: 4250,
      profit: 1896,
      days: 22,
      expenses: 2354,
      reason: "",
  },
  {
    month: "Jul",
    sales: 2425,
      profit: 943,
      days: 9,
      expenses: 1482,
      reason: "Academic Commitments",
  },
  {
    month: "Aug",
    sales: 2060,
      profit: 969,
      days: 4,
      expenses: 1091,
      reason: "Academic Commitments",
    },
  ];

  // Projected data for full academic year (7 months, 168 working days)
  // Working months: Jan, Feb, Mar, Apr, Jun, Jul, Aug (May is break month)
  const projectionData = [
    {
      month: "Jan",
      sales: 5000,
      profit: 2500,
      days: 24,
      type: "Projected",
      reason: "",
    },
    {
      month: "Feb",
      sales: 5500,
      profit: 2750,
      days: 24,
      type: "Projected",
      reason: "",
    },
    {
      month: "Mar",
      sales: 6000,
      profit: 3000,
      days: 24,
      type: "Projected",
      reason: "",
    },
    {
      month: "Apr",
      sales: 6500,
      profit: 3250,
      days: 24,
      type: "Projected",
      reason: "",
    },
    {
      month: "May",
    sales: 0,
    profit: 0,
      days: 0,
      type: "Break",
      reason: "Semester Break",
    },
    {
      month: "Jun",
      sales: 7000,
      profit: 3500,
      days: 24,
      type: "Projected",
      reason: "",
    },
    {
      month: "Jul",
      sales: 7500,
      profit: 3750,
      days: 24,
      type: "Projected",
      reason: "",
    },
    {
      month: "Aug",
      sales: 8000,
      profit: 4000,
      days: 24,
      type: "Projected",
      reason: "",
    },
  ];

  // Star Ice projections (same academic calendar as Star Pops)
  const starIceData = [
    { month: "Jan", revenue: 9500, profit: 3800, type: "Star Ice", reason: "" },
    {
      month: "Feb",
      revenue: 10000,
      profit: 4000,
      type: "Star Ice",
      reason: "",
    },
    {
      month: "Mar",
      revenue: 10500,
      profit: 4200,
      type: "Star Ice",
      reason: "",
    },
    {
      month: "Apr",
      revenue: 11000,
      profit: 4400,
      type: "Star Ice",
      reason: "",
    },
    {
      month: "May",
      revenue: 0,
      profit: 0,
      type: "Break",
      reason: "Semester Break",
    },
    {
      month: "Jun",
      revenue: 11500,
      profit: 4600,
      type: "Star Ice",
      reason: "",
    },
    {
      month: "Jul",
      revenue: 12000,
      profit: 4800,
      type: "Star Ice",
      reason: "",
    },
    {
      month: "Aug",
      revenue: 12500,
      profit: 5000,
      type: "Star Ice",
      reason: "",
    },
  ];

  const combinedData = [...actualData, ...projectionData];

  // Calculate totals
  const totalActualSales = actualData.reduce(
    (sum, item) => sum + item.sales,
    0
  );
  const totalActualProfit = actualData.reduce(
    (sum, item) => sum + item.profit,
    0
  );
  const totalActualDays = actualData.reduce((sum, item) => sum + item.days, 0);

  // Expected days calculation (7 months × 24 days = 168 days)
  const expectedDaysIn7Months = 7 * 24;

  const totalProjectedSales = projectionData.reduce(
    (sum, item) => sum + item.sales,
    0
  );
  const totalProjectedProfit = projectionData.reduce(
    (sum, item) => sum + item.profit,
    0
  );

  // Calculate working days (excluding May break)
  const totalProjectedDays = projectionData.reduce(
    (sum, item) => sum + item.days,
    0
  );

  const totalStarIceRevenue = starIceData.reduce(
    (sum, item) => sum + item.revenue,
    0
  );
  const totalStarIceProfit = starIceData.reduce(
    (sum, item) => sum + item.profit,
    0
  );

  return (
    <section id="business" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Business Performance & Investment Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on our actual performance and realistic projections, here's
            how your investment will grow with our business.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="scroll-animate">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover-lift transition-all">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Star Pops Performance
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                GHS {totalActualSales.toLocaleString()}
              </div>
              <div className="text-blue-700">7-Month Sales</div>
              <div className="text-sm text-blue-600 mt-2">
                {totalActualDays} days worked out of {expectedDaysIn7Months}{" "}
                days
              </div>
              <div className="text-sm text-blue-600">
                GHS {totalActualProfit.toLocaleString()} Profit
              </div>
            </div>
          </div>

          <div className="scroll-animate">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover-lift transition-all">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Star Pops Projection
              </h3>
              <div className="text-3xl font-bold text-green-600 mb-1">
                GHS {totalProjectedSales.toLocaleString()}
              </div>
              <div className="text-green-700">7-Month Full Capacity</div>
              <div className="text-sm text-green-600 mt-2">
                {totalProjectedDays} days (7 working months)
              </div>
              <div className="text-sm text-green-600">
                GHS {totalProjectedProfit.toLocaleString()} Profit
              </div>
            </div>
          </div>

          <div className="scroll-animate">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover-lift transition-all">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                Star Ice Projection
              </h3>
              <div className="text-3xl font-bold text-purple-600 mb-1">
                GHS {totalStarIceRevenue.toLocaleString()}
              </div>
              <div className="text-purple-700">7-Month Revenue</div>
              <div className="text-sm text-purple-600 mt-2">
                GHS {totalStarIceProfit.toLocaleString()} Profit
              </div>
            </div>
          </div>

          <div className="scroll-animate">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover-lift transition-all">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">
                Investment Target
              </h3>
              <div className="text-3xl font-bold text-orange-600 mb-1">
                GHS 43,000
              </div>
              <div className="text-orange-700">Total Raise</div>
              <div className="text-sm text-orange-600 mt-2">
                For Both Businesses
              </div>
            </div>
          </div>
        </div>

        {/* Combined Business Summary */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200 mb-12">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4 text-center">
            Combined Business Potential
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">
                GHS{" "}
                {(totalProjectedSales + totalStarIceRevenue).toLocaleString()}
              </div>
              <div className="text-indigo-700">Total 7-Month Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">
                GHS{" "}
                {(totalProjectedProfit + totalStarIceProfit).toLocaleString()}
              </div>
              <div className="text-indigo-700">Total 7-Month Profit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">
                GHS 43,000
              </div>
              <div className="text-indigo-700">Investment Needed</div>
          </div>
          </div>
          </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("performance")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "performance"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Performance
            </button>
            <button
              onClick={() => setActiveTab("projections")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "projections"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Projections
            </button>
            <button
              onClick={() => setActiveTab("investment")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "investment"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Investment Model
            </button>
          </div>
        </div>

        {/* Performance Tab */}
        {activeTab === "performance" && (
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Actual Business Performance (6 Months)
          </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">
                    Sales & Profit Trend
                  </h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={actualData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
                      <Tooltip
                        formatter={(value, name, props) => {
                          if (value === 0 && props.payload.reason) {
                            return [`${props.payload.reason}`, name];
                          }
                          return [`GHS ${value.toLocaleString()}`, name];
                        }}
                      />
                      <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                        stroke="#3b82f6"
                        strokeWidth={2}
                name="Sales"
              />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#10b981"
                        strokeWidth={2}
                name="Profit"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">
                    Working Days vs Performance
                  </h4>
            <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={actualData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                      <Legend />
                      <Bar dataKey="days" fill="#f59e0b" name="Working Days" />
                      <Bar dataKey="sales" fill="#3b82f6" name="Sales (GHS)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-blue-600">
                    {totalActualDays}
                  </div>
                  <div className="text-gray-600">Total Working Days</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-green-600">
                    GHS {(totalActualSales / totalActualDays).toFixed(0)}
                  </div>
                  <div className="text-gray-600">Average Daily Sales</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-orange-600">
                    GHS {(totalActualProfit / totalActualDays).toFixed(0)}
                  </div>
                  <div className="text-gray-600">Average Daily Profit</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projections Tab */}
        {activeTab === "projections" && (
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Full Academic Year Projections (7 Months, 168 Days)
            </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">
                    Combined Business Projections
                  </h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={[
                        ...combinedData,
                        ...starIceData.map((item) => ({
                          ...item,
                          month: item.month + " (Ice)",
                        })),
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        formatter={(value, name, props) => {
                          if (value === 0 && props.payload.reason) {
                            return [`${props.payload.reason}`, name];
                          }
                          return [`GHS ${value.toLocaleString()}`, name];
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        name="Star Pops Sales"
                      />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        name="Star Ice Revenue"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">
                    Profit Projections
                  </h4>
            <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={[...projectionData, ...starIceData]}>
                <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                        formatter={(value, name, props) => {
                          if (value === 0 && props.payload.reason) {
                            return [`${props.payload.reason}`, name];
                          }
                          return [`GHS ${value.toLocaleString()}`, name];
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="profit"
                        fill="#10b981"
                        name="Star Pops Profit"
                      />
                      <Bar
                        dataKey="profit"
                        fill="#8b5cf6"
                        name="Star Ice Profit"
                      />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Investment Impact Analysis
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>
                      <strong>Without Investment:</strong> Limited to current
                      capacity
                    </p>
                    <p>
                      <strong>With Investment:</strong> Expand to 168 working
                      days + Star Ice business
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Projected Annual Revenue:</strong> GHS{" "}
                      {(
                        totalProjectedSales + totalStarIceRevenue
                      ).toLocaleString()}
                    </p>
                    <p>
                      <strong>Projected Annual Profit:</strong> GHS{" "}
                      {(
                        totalProjectedProfit + totalStarIceProfit
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Investment Model Tab */}
        {activeTab === "investment" && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">
                🎯 New Investment Model: Profit-Sharing Partnership
          </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-orange-700 mb-4">
                    How It Works
                  </h4>
                  <ul className="space-y-3 text-orange-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      Investor contributes capital (GHS 1,000 - GHS 43,000)
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      Monthly profit sharing based on investment percentage
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      Returns continue until target profit is reached
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      No fixed deadlines or impossible promises
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-orange-700 mb-4">
                    Example Investment
                  </h4>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
            <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-2">
                        GHS 1,000 Investment
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        2.33% of total raise
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Monthly Profit Share:</span>
                          <span className="font-semibold">
                            2.33% of profits
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Target Return:</span>
                          <span className="font-semibold">
                            GHS 1,200 (20% profit)
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Timeline:</span>
                          <span className="font-semibold">
                            Until target reached
                          </span>
              </div>
            </div>
              </div>
            </div>
            </div>
          </div>

              <div className="mt-6 text-center">
                <p className="text-orange-700 font-medium">
                  This model ensures investors earn more when we succeed, while
                  protecting the business from unrealistic payment obligations.
                  It's a true partnership for growth!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Investment Target Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Invest?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join us in building Ghana's premier snack empire. Your investment
            will be used to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-2xl font-bold mb-2">🏪</div>
              <div>Open New Branches</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">🍦</div>
              <div>Launch Star Ice</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">🚀</div>
              <div>Scale Operations</div>
            </div>
          </div>
          <div className="text-3xl font-bold">
            Investment Target: GHS 43,000
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <strong>Note:</strong> These projections are based on current
          performance trends and the assumption of working full academic days
          (168 days) with expanded operations including Star Ice business.
        </div>
      </div>
    </section>
  );
}
