"use client";

import { useState, useEffect } from "react";
import { Printer, Download, FileText, RefreshCw } from "lucide-react";

interface FinancialData {
  month: string;
  sales: number;
  expenses: number;
  profit: number;
  daysWorked: number;
  daysExpected: number;
  reason?: string;
}

interface BusinessData {
  monthlyHistory: FinancialData[];
  yearToDate: {
    totalSales: number;
    totalExpenses: number;
    totalProfit: number;
    totalDaysWorked: number;
    totalDaysExpected: number;
    profitMargin: number;
  };
}

export default function FinancialStatements() {
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-6 h-6 text-blue-500 animate-spin" />
          <span className="text-gray-600">Loading financial data...</span>
        </div>
      </div>
    );
  }

  if (!businessData) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Unable to load financial data</p>
      </div>
    );
  }

  const monthlyData = businessData.monthlyHistory;

  const totals = monthlyData.reduce(
    (
      acc: {
        sales: number;
        expenses: number;
        profit: number;
        daysWorked: number;
        daysExpected: number;
      },
      item
    ) => {
      acc.sales += item.sales;
      acc.expenses += item.expenses;
      acc.profit += item.profit;
      acc.daysWorked += item.daysWorked;
      acc.daysExpected += item.daysExpected;
      return acc;
    },
    { sales: 0, expenses: 0, profit: 0, daysWorked: 0, daysExpected: 0 }
  );

  const generateFinancialStatement = () => {
    const content = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="color: #f59e0b; margin: 0;">Star Enterprise</h1>
          <h2 style="color: #374151; margin: 10px 0;">Financial Statement</h2>
          <p style="color: #6b7280; margin: 0;">${
            selectedMonth === "all" ? "All Months" : selectedMonth
          }</p>
          <p style="color: #6b7280; margin: 5px 0;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>

        <div style="margin-bottom: 30px;">
          <h3 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Income Statement</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr style="background-color: #f9fafb;">
                <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Month</th>
                <th style="border: 1px solid #d1d5db; padding: 12px; text-align: right;">Sales (GHS)</th>
                <th style="border: 1px solid #d1d5db; padding: 12px; text-align: right;">Expenses (GHS)</th>
                <th style="border: 1px solid #d1d5db; padding: 12px; text-align: right;">Profit (GHS)</th>
                <th style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">Days Worked</th>
              </tr>
            </thead>
            <tbody>
              ${monthlyData
                .map(
                  (item) => `
                <tr>
                  <td style="border: 1px solid #d1d5db; padding: 12px;">${
                    item.month
                  }</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: right;">${item.sales.toLocaleString()}</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: right;">${item.expenses.toLocaleString()}</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: right; color: ${
                    item.profit >= 0 ? "#10b981" : "#ef4444"
                  }; font-weight: bold;">${item.profit.toLocaleString()}</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">${
                    item.daysWorked
                  }/${item.daysExpected}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>

        <div style="margin-bottom: 30px;">
          <h3 style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Summary</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px;">
              <h4 style="color: #166534; margin: 0 0 10px 0;">Total Sales</h4>
                               <p style="color: #166534; font-size: 24px; font-weight: bold; margin: 0;">GHS ${monthlyData
                                 .reduce(
                                   (sum: number, item: any) => sum + item.sales,
                                   0
                                 )
                                 .toLocaleString()}</p>
               </div>
               <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px;">
                 <h4 style="color: #991b1b; margin: 0 0 10px 0;">Total Expenses</h4>
                 <p style="color: #991b1b; font-size: 24px; font-weight: bold; margin: 0;">GHS ${monthlyData
                   .reduce((sum: number, item: any) => sum + item.expenses, 0)
                   .toLocaleString()}</p>
               </div>
               <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px;">
                 <h4 style="color: #1e40af; margin: 0 0 10px 0;">Total Profit</h4>
                 <p style="color: #1e40af; font-size: 24px; font-weight: bold; margin: 0;">GHS ${monthlyData
                   .reduce((sum: number, item: any) => sum + item.profit, 0)
                   .toLocaleString()}</p>
               </div>
               <div style="background-color: #faf5ff; padding: 20px; border-radius: 8px;">
                 <h4 style="color: #7c3aed; margin: 0 0 10px 0;">Profit Margin</h4>
                 <p style="color: #7c3aed; font-size: 24px; font-weight: bold; margin: 0;">${(
                   (monthlyData.reduce(
                     (sum: number, item: any) => sum + item.profit,
                     0
                   ) /
                     monthlyData.reduce(
                       (sum: number, item: any) => sum + item.sales,
                       0
                     )) *
                   100
                 ).toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #f59e0b;">
          <p style="color: #6b7280; margin: 0;">Star Enterprise - "Feel the Pops & Chills!"</p>
          <p style="color: #6b7280; margin: 5px 0;">Contact: starenterprise001@gmail.com</p>
        </div>
      </div>
    `;

    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
          <FileText className="w-5 h-5 text-blue-500 mr-2" />
          Financial Statements
        </h3>
        <div className="flex space-x-2">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Months</option>
            {monthlyData.map((item) => (
              <option key={item.month} value={item.month}>
                {item.month}
              </option>
            ))}
          </select>
          <button
            onClick={generateFinancialStatement}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Month
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Sales (GHS)
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Expenses (GHS)
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Profit (GHS)
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Days Worked
              </th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {item.month}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  {item.sales.toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  {item.expenses.toLocaleString()}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 text-right font-semibold ${
                    item.profit >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.profit.toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.daysWorked}/{item.daysExpected}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Total
              </td>
              <td className="border border-gray-300 px-4 py-2 text-right font-semibold">
                {totals.sales.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-right font-semibold">
                {totals.expenses.toLocaleString()}
              </td>
              <td
                className={`border border-gray-300 px-4 py-2 text-right font-semibold ${
                  totals.profit >= 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                {totals.profit.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center font-semibold">
                {totals.daysWorked}/{totals.daysExpected}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
