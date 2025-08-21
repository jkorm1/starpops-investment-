"use client";

import { X } from "lucide-react";

export default function TermsSection({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Terms & Conditions
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              1. Investment Overview
            </h3>
            <p className="text-gray-700 mb-3">
              This investment is a{" "}
              <strong>quarterly profit-sharing partnership</strong>
              with Star Enterprise (Star Pops & Star Ice), a Ghana-based popcorn
              production, ice cream distribution, and snack business. It is{" "}
              <strong>not</strong> equity and <strong>not</strong> a loan. By
              proceeding, you acknowledge that returns are based on actual
              business performance and are not guaranteed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              2. Investment Structure
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Minimum Investment:</strong> GHS 1,000
              </li>
              <li>
                <strong>Maximum Investment:</strong> GHS 43,000 per investor
              </li>
              <li>
                <strong>Total Investment Target:</strong> GHS 43,000
              </li>
              <li>
                <strong>Model:</strong> Quarterly profit-sharing based on actual
                profits (high profit, high return)
              </li>
              <li>
                <strong>Accrual:</strong> Profit share accrues monthly and is
                paid out every 3 months
              </li>
            </ul>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">
                Return Structure (Quarterly Profit-Sharing)
              </h4>
              <p className="text-yellow-700 text-sm mb-2">
                Investors receive a percentage of monthly profits and are paid
                quarterly (March, June, September, December) until the target
                return is reached.
              </p>
              <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                <li>
                  <strong>Profit-Share:</strong> Based on investment amount and
                  tier; calculated as a percentage of actual profits
                </li>
                <li>
                  <strong>Target Return:</strong> 1.20× the invested amount
                </li>
                <li>
                  <strong>Performance-Adjusted:</strong> High profit, high
                  return; lower profits reduce payouts proportionally
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              3. Risk Disclosures
            </h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold mb-2">
                IMPORTANT RISK WARNINGS:
              </p>
              <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                <li>
                  While returns are guaranteed for the chosen period, early
                  withdrawal may result in reduced returns
                </li>
                <li>
                  Equity participation has 24-month minimum lock-in period
                </li>
                <li>Shares may be illiquid for extended periods</li>
                <li>Business performance may not meet projections</li>
                <li>Market conditions may adversely affect business</li>
                <li>Regulatory changes may impact operations</li>
                <li>Competition may increase in the market</li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">
                Performance-Based Returns
              </h4>
              <p className="text-green-700 text-sm">
                <strong>
                  Your returns are based on your chosen investment period and
                  business performance:
                </strong>
                <br />
                • 3 months: 8% return
                <br />
                • 6 months: 12% return
                <br />
                • 1 year: 18% return
                <br />
                Returns are performance-based and paid at the end of the
                investment period.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              4. Investor Rights & Limitations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Rights Granted:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    Quarterly payout based on agreed profit-share percentage
                  </li>
                  <li>Access to quarterly financial summaries</li>
                  <li>Email support and updates on major developments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Limitations:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>No equity ownership or voting rights</li>
                  <li>No entitlement to dividends or board representation</li>
                  <li>
                    Profit-share interests are non-transferable without company
                    consent
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              5. Transferability & Liquidity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Profit-share interests are contractual and non-transferable
                without company consent
              </li>
              <li>
                No public market exists for these interests; liquidity is not
                assured
              </li>
              <li>
                Payouts accrue monthly and are paid quarterly while the
                agreement is active
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              6. Company Rights & Protections
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Company reserves right to modify business model and operations
              </li>
              <li>
                Company may issue additional shares (subject to anti-dilution
                for company)
              </li>
              <li>Company controls exit strategy and timing</li>
              <li>Company may reject any investment offer at its discretion</li>
              <li>Company may modify these terms with 30 days notice</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              7. Payout Completion & Early Settlement
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Payouts continue quarterly until the investor receives 1.20× of
                their invested amount
              </li>
              <li>
                The company may, at its discretion, settle the remaining balance
                early
              </li>
              <li>
                Upon completion of the target return, the agreement terminates
                automatically
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              8. Financial Reporting
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Quarterly financial reports provided to investors</li>
              <li>Annual audited financial statements</li>
              <li>Major business developments communicated promptly</li>
              <li>No guarantee of profitability or positive returns</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              9. Dispute Resolution
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>All disputes subject to Ghanaian law</li>
              <li>Mediation required before legal action</li>
              <li>Arbitration in Accra, Ghana if mediation fails</li>
              <li>Investor bears own legal costs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              10. Termination & Withdrawal
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Investment agreement may be terminated by mutual consent</li>
              <li>Company may terminate for material breach by investor</li>
              <li>No right to withdraw investment during lock-in period</li>
              <li>Early termination may result in loss of investment</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">
              Legal Disclaimer
            </h3>
            <p className="text-yellow-700 text-sm">
              This document is for informational purposes only and does not
              constitute a legal offer. All investments are subject to final
              agreement and legal review. Star Pops reserves the right to accept
              or reject any investment offer. Past performance does not
              guarantee future results. Consult with legal and financial
              advisors before making any investment decision.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800 mb-2">
              Contact Information
            </h3>
            <p className="text-blue-700 text-sm">
              <strong>Company:</strong> Star Enterprise (Star Pops & Star Ice)
              <br />
              <strong>Founder:</strong> Joseph Korm
              <br />
              <strong>Email:</strong> starenterprise001@gmail.com
              <br />
              <strong>Location:</strong> Ghana
              <br />
              <strong>Business:</strong> Popcorn production and ice cream
              distribution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
