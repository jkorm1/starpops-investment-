"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  Calendar,
  DollarSign,
  Users,
  BarChart3,
  RefreshCw,
} from "lucide-react";

interface BusinessData {
  lastUpdated: string;
  investmentTarget: number;
  currentMonth: {
    month: string;
    sales: number;
    expenses: number;
    profit: number;
    daysWorked: number;
    daysExpected: number;
    reason: string;
  };
  quarterlyData: Array<{
    quarter: string;
    startDate: string;
    endDate: string;
    starPopsSales: number;
    starPopsExpenses: number;
    starPopsProfit: number;
    starIceSales: number;
    starIceExpenses: number;
    starIceProfit: number;
    totalProfit: number;
    profitSharingPool: number;
    status: string;
  }>;
  yearToDate: {
    totalSales: number;
    totalExpenses: number;
    totalProfit: number;
    totalDaysWorked: number;
    totalDaysExpected: number;
    profitMargin: number;
  };
  projections: {
    starPops: {
      monthlyRevenue: number;
      monthlyProfit: number;
      annualRevenue: number;
      annualProfit: number;
    };
    starIce: {
      monthlyRevenue: number;
      monthlyProfit: number;
      annualRevenue: number;
      annualProfit: number;
    };
    combined: {
      monthlyRevenue: number;
      monthlyProfit: number;
      annualRevenue: number;
      annualProfit: number;
    };
  };
  performanceMetrics: {
    profitSharingRate: number;
    targetReturn: number;
    minimumInvestment: number;
    payoutSchedule: string;
  };
  monthlyHistory: Array<{
    month: string;
    sales: number;
    expenses: number;
    profit: number;
    daysWorked: number;
    daysExpected: number;
    reason: string;
  }>;
}

export default function BusinessDashboard() {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setError(
          err instanceof Error ? err.message : "Failed to load business data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-6 h-6 text-orange-500 animate-spin" />
          <span className="text-gray-600">Loading business data...</span>
        </div>
      </div>
    );
  }

  if (error || !businessData) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 mb-4">
          <BarChart3 className="w-12 h-12 mx-auto mb-2" />
          <p>Unable to load business data</p>
        </div>
        <p className="text-gray-600">
          Please check back later or contact support.
        </p>
      </div>
    );
  }

  return (
    <section
      id="dashboard"
      className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Business Performance Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time updates on Star Enterprise performance and investor
            returns
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated:{" "}
            {new Date(businessData.lastUpdated).toLocaleDateString()}
          </p>
        </div>

        {/* Current Month Performance */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 text-orange-500 mr-3" />
            Current Month Performance - {businessData.currentMonth.month}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Sales</p>
                  <p className="text-2xl font-bold">
                    GHS {businessData.currentMonth.sales.toLocaleString()}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-100" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Total Expenses</p>
                  <p className="text-2xl font-bold">
                    GHS {businessData.currentMonth.expenses.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-red-100" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Net Profit</p>
                  <p className="text-2xl font-bold">
                    GHS {businessData.currentMonth.profit.toLocaleString()}
                  </p>
                </div>
                <BarChart3 className="w-8 h-8 text-blue-100" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Days Worked</p>
                  <p className="text-2xl font-bold">
                    {businessData.currentMonth.daysWorked}/
                    {businessData.currentMonth.daysExpected}
                  </p>
                </div>
                <Users className="w-8 h-8 text-purple-100" />
              </div>
            </div>
          </div>

          {businessData.currentMonth.reason && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800">
                <strong>Note:</strong> {businessData.currentMonth.reason}
              </p>
            </div>
          )}
        </div>

        {/* Quarterly Performance */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Quarterly Performance
          </h3>

          <div className="space-y-6">
            {businessData.quarterlyData.map((quarter, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {quarter.quarter}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      quarter.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {quarter.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">
                      Star Pops
                    </h5>
                    <p className="text-sm text-orange-600">
                      Sales: GHS {quarter.starPopsSales.toLocaleString()}
                    </p>
                    <p className="text-sm text-orange-600">
                      Profit: GHS {quarter.starPopsProfit.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">
                      Star Ice
                    </h5>
                    <p className="text-sm text-blue-600">
                      Sales: GHS {quarter.starIceSales.toLocaleString()}
                    </p>
                    <p className="text-sm text-blue-600">
                      Profit: GHS {quarter.starIceProfit.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">
                      Total Profit
                    </h5>
                    <p className="text-lg font-bold text-green-600">
                      GHS {quarter.totalProfit.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      Profit Sharing Pool
                    </h5>
                    <p className="text-lg font-bold text-purple-600">
                      GHS {quarter.profitSharingPool.toLocaleString()}
                    </p>
                    <p className="text-xs text-purple-600">
                      ({businessData.performanceMetrics.profitSharingRate}% of
                      total profit)
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Year-to-Date Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Year-to-Date Summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Total Sales</h4>
              <p className="text-3xl font-bold text-green-600">
                GHS {businessData.yearToDate.totalSales.toLocaleString()}
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Total Profit</h4>
              <p className="text-3xl font-bold text-blue-600">
                GHS {businessData.yearToDate.totalProfit.toLocaleString()}
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Profit Margin
              </h4>
              <p className="text-3xl font-bold text-purple-600">
                {businessData.yearToDate.profitMargin}%
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              <strong>Work Progress:</strong>{" "}
              {businessData.yearToDate.totalDaysWorked} days worked out of{" "}
              {businessData.yearToDate.totalDaysExpected} expected days (
              {Math.round(
                (businessData.yearToDate.totalDaysWorked /
                  businessData.yearToDate.totalDaysExpected) *
                  100
              )}
              % completion)
            </p>
          </div>
        </div>

        {/* Investment Performance */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Investment Performance Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Profit Sharing Rate
              </h4>
              <p className="text-2xl font-bold text-orange-600">
                {businessData.performanceMetrics.profitSharingRate}%
              </p>
              <p className="text-sm text-gray-500">of monthly returns</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Target Return
              </h4>
              <p className="text-2xl font-bold text-green-600">
                {businessData.performanceMetrics.targetReturn}x
              </p>
              <p className="text-sm text-gray-500">return on investment</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Minimum Investment
              </h4>
              <p className="text-2xl font-bold text-blue-600">
                GHS{" "}
                {businessData.performanceMetrics.minimumInvestment.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">per investor</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Payout Schedule
              </h4>
              <p className="text-2xl font-bold text-purple-600">
                {businessData.performanceMetrics.payoutSchedule}
              </p>
              <p className="text-sm text-gray-500">every 3 months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
