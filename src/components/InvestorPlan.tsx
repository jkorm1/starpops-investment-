"use client";

import React, { useState } from "react";
import {
  Calendar,
  Target,
  Users,
  MapPin,
  TrendingUp,
  Shield,
  CheckCircle,
  DollarSign,
  Clock,
  BarChart3,
  Building2,
  Truck,
  ShoppingBag,
  Star,
  Zap,
} from "lucide-react";

const InvestorPlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const executionPhases = [
    {
      phase: "Phase 1: February - Establishment",
      target: "GHS 8,000 revenue, GHS 3,200 profit",
      dailyTarget: "GHS 333 revenue, 34 customers",
      actions: [
        "Set up 2 Star Pops stands at university locations",
        "Launch 1 Star Ice stand at student center",
        "Hire and train 3 team members",
        "Establish supplier relationships",
        "Begin daily operations with proven products",
      ],
      whyItWorks: [
        "University students are proven customers",
        "Popcorn has 100% success rate in our market",
        "Ice cream demand is highest during academic year",
        "24 working days gives us time to perfect operations",
      ],
    },
    {
      phase: "Phase 2: March - Growth",
      target: "GHS 9,000 revenue, GHS 3,600 profit",
      dailyTarget: "GHS 375 revenue, 38 customers",
      actions: [
        "Expand to 3 Star Pops stands",
        "Add 1 mobile Star Ice unit",
        "Launch door-to-door sales program",
        "Begin corporate catering services",
        "Implement customer loyalty program",
      ],
      whyItWorks: [
        "Multiple locations reduce dependency on single site",
        "Mobile units capture events and festivals",
        "Corporate clients provide bulk orders",
        "Customer loyalty ensures repeat business",
      ],
    },
    {
      phase: "Phase 3: April - Optimization",
      target: "GHS 10,000 revenue, GHS 4,000 profit",
      dailyTarget: "GHS 417 revenue, 42 customers",
      actions: [
        "Scale to 4 Star Pops stands",
        "Launch premium product lines",
        "Begin retail distribution",
        "Establish online ordering system",
        "Partner with local businesses",
      ],
      whyItWorks: [
        "Premium products increase average sale value",
        "Retail distribution expands market reach",
        "Online ordering captures tech-savvy customers",
        "Business partnerships create referral networks",
      ],
    },
    {
      phase: "Phase 4: June - Expansion",
      target: "GHS 12,000 revenue, GHS 4,800 profit",
      dailyTarget: "GHS 500 revenue, 50 customers",
      actions: [
        "Operate 5 Star Pops stands + 1 mobile unit",
        "Launch 2 Star Ice locations",
        "Begin event catering services",
        "Establish beach and park locations",
        "Launch summer marketing campaign",
      ],
      whyItWorks: [
        "Summer months increase outdoor consumption",
        "Event catering provides bulk revenue",
        "Beach and park locations capture tourist market",
        "Multiple revenue streams reduce risk",
      ],
    },
    {
      phase: "Phase 5: July - Market Leadership",
      target: "GHS 13,000 revenue, GHS 5,200 profit",
      dailyTarget: "GHS 542 revenue, 54 customers",
      actions: [
        "Operate 6 Star Pops stands + 2 mobile units",
        "Launch premium Star Ice products",
        "Begin corporate event partnerships",
        "Establish VIP customer service",
        "Launch brand ambassador program",
      ],
      whyItWorks: [
        "Premium positioning increases profit margins",
        "Corporate partnerships provide stable revenue",
        "VIP service creates customer loyalty",
        "Brand ambassadors expand market reach",
      ],
    },
    {
      phase: "Phase 6: August - Peak Performance",
      target: "GHS 11,872 revenue, GHS 4,529 profit",
      dailyTarget: "GHS 495 revenue, 50 customers",
      actions: [
        "Operate 7 Star Pops stands + 3 mobile units",
        "Maximize all revenue streams",
        "Prepare for investor returns",
        "Plan business sustainability",
        "Document successful processes",
      ],
      whyItWorks: [
        "Full operational capacity",
        "Proven systems and processes",
        "Established customer base",
        "Multiple revenue streams",
      ],
    },
  ];

  const dailyMoneySplit = [
    {
      category: "Investor Account",
      amount: 110,
      percentage: 16,
      color: "bg-blue-500",
      purpose: "Half-yearly payouts to investors",
    },
    {
      category: "Employee Payroll",
      amount: 138,
      percentage: 20,
      color: "bg-green-500",
      purpose: "Pay your team members",
    },
    {
      category: "Business Owner Pay",
      amount: 69,
      percentage: 10,
      color: "bg-purple-500",
      purpose: "Your monthly salary",
    },
    {
      category: "Business Operations",
      amount: 207,
      percentage: 30,
      color: "bg-orange-500",
      purpose: "Daily business costs and reinvestment",
    },
    {
      category: "Savings & Expansion",
      amount: 69,
      percentage: 10,
      color: "bg-teal-500",
      purpose: "Future business growth and emergency fund",
    },
    {
      category: "Taxes & Compliance",
      amount: 35,
      percentage: 5,
      color: "bg-red-500",
      purpose: "Government taxes and business registration",
    },
    {
      category: "Profit Buffer",
      amount: 64,
      percentage: 9,
      color: "bg-indigo-500",
      purpose: "Extra profit to ensure investor returns",
    },
  ];

  const locationStrategy = [
    {
      business: "Star Pops Stands (Proven Locations)",
      locations: [
        {
          name: "University Main Gate",
          customers: "200+ students daily",
          revenue: "GHS 150/day",
          status: "Proven",
        },
        {
          name: "Business School",
          customers: "150+ professionals daily",
          revenue: "GHS 120/day",
          status: "Proven",
        },
        {
          name: "Engineering Faculty",
          customers: "180+ students daily",
          revenue: "GHS 140/day",
          status: "Proven",
        },
        {
          name: "Medical School",
          customers: "120+ healthcare workers daily",
          revenue: "GHS 100/day",
          status: "Proven",
        },
        {
          name: "Student Center",
          customers: "300+ students daily",
          revenue: "GHS 200/day",
          status: "Proven",
        },
        {
          name: "Sports Complex",
          customers: "100+ athletes daily",
          revenue: "GHS 80/day",
          status: "Proven",
        },
        {
          name: "Library Area",
          customers: "150+ students daily",
          revenue: "GHS 120/day",
          status: "Proven",
        },
      ],
    },
    {
      business: "Star Ice Locations (High-Demand Areas)",
      locations: [
        {
          name: "University Plaza",
          customers: "Central student area",
          revenue: "Proven ice cream demand",
          status: "New",
        },
        {
          name: "Business District",
          customers: "Corporate client access",
          revenue: "Premium pricing",
          status: "New",
        },
        {
          name: "Shopping Mall",
          customers: "High foot traffic",
          revenue: "Family market",
          status: "New",
        },
        {
          name: "Beach Area",
          customers: "Tourist market",
          revenue: "Seasonal premium pricing",
          status: "New",
        },
        {
          name: "Park Locations",
          customers: "Family market",
          revenue: "Outdoor consumption",
          status: "New",
        },
      ],
    },
  ];

  const productStrategy = [
    {
      business: "Star Pops (100% Success Rate)",
      products: [
        {
          name: "Classic Butter",
          price: "GHS 10",
          sales: "40% of sales",
          margin: "Base price",
        },
        {
          name: "Cheese",
          price: "GHS 15",
          sales: "25% of sales",
          margin: "Higher margin",
        },
        {
          name: "Caramel",
          price: "GHS 20",
          sales: "20% of sales",
          margin: "Premium margin",
        },
        {
          name: "Chocolate",
          price: "GHS 25",
          sales: "10% of sales",
          margin: "Highest margin",
        },
        {
          name: "Spicy",
          price: "GHS 20",
          sales: "5% of sales",
          margin: "Niche market",
        },
      ],
      averageSale: "GHS 15 (50% higher than minimum)",
    },
    {
      business: "Star Ice (High-Demand Market)",
      products: [
        {
          name: "Vanilla",
          price: "GHS 10",
          sales: "30% of sales",
          margin: "Base price",
        },
        {
          name: "Chocolate",
          price: "GHS 15",
          sales: "25% of sales",
          margin: "Higher margin",
        },
        {
          name: "Strawberry",
          price: "GHS 15",
          sales: "20% of sales",
          margin: "Higher margin",
        },
        {
          name: "Mint",
          price: "GHS 18",
          sales: "15% of sales",
          margin: "Premium margin",
        },
        {
          name: "Premium Sundae",
          price: "GHS 35",
          sales: "10% of sales",
          margin: "Highest margin",
        },
      ],
      averageSale: "GHS 18 (80% higher than minimum)",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🎯 Investor Confidence Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed execution strategy showing exactly how we'll achieve your
            1.5x returns while building a sustainable business empire
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {[
            "overview",
            "execution",
            "money",
            "locations",
            "products",
            "guarantee",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Investment Amount</p>
                      <p className="text-2xl font-bold">GHS 43,000</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-blue-200" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Guaranteed Return</p>
                      <p className="text-2xl font-bold">1.5x = GHS 64,500</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-200" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Timeline</p>
                      <p className="text-2xl font-bold">7 Months</p>
                    </div>
                    <Clock className="w-8 h-8 text-purple-200" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100">Half-Yearly Payout</p>
                      <p className="text-2xl font-bold">GHS 32,250</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-orange-200" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-green-600" />
                  Investment Guarantee
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      What You Get:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span>Guaranteed 1.5x return on investment</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span>Half-yearly payouts of GHS 32,250</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span>Complete return within 7 months</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span>Business continues as independent entity</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Why It's Safe:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span>Proven business model (3 years success)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span>Conservative projections (60% of potential)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span>Multiple revenue streams</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span>Academic calendar alignment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Execution Tab */}
          {activeTab === "execution" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  📅 7-Month Execution Strategy
                </h3>
                <p className="text-gray-600">
                  Detailed phase-by-phase plan showing exactly how we'll achieve
                  your returns
                </p>
              </div>

              <div className="space-y-6">
                {executionPhases.map((phase, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {phase.phase}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Target className="w-4 h-4 mr-2 text-blue-600" />
                            {phase.target}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-2 text-green-600" />
                            {phase.dailyTarget}
                          </span>
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Phase {index + 1}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-orange-600" />
                          What We'll Do:
                        </h5>
                        <ul className="space-y-2">
                          {phase.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Star className="w-4 h-4 mr-2 text-yellow-600" />
                          Why This Will Work:
                        </h5>
                        <ul className="space-y-2">
                          {phase.whyItWorks.map((reason, reasonIndex) => (
                            <li key={reasonIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Money Management Tab */}
          {activeTab === "money" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  💰 Daily Money Management
                </h3>
                <p className="text-gray-600">
                  Transparent breakdown of how every GHS 692 daily revenue is
                  allocated
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Daily Revenue Target
                  </h4>
                  <p className="text-3xl font-bold text-blue-600">GHS 692</p>
                  <p className="text-gray-600">70 customers minimum per day</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Money Split Breakdown
                  </h4>
                  <div className="space-y-3">
                    {dailyMoneySplit.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border"
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-4 h-4 rounded-full ${item.color} mr-3`}
                          ></div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {item.category}
                            </p>
                            <p className="text-sm text-gray-600">
                              {item.purpose}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">
                            GHS {item.amount}
                          </p>
                          <p className="text-sm text-gray-600">
                            {item.percentage}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Monthly Totals (24 Working Days)
                  </h4>
                  <div className="space-y-3">
                    {dailyMoneySplit.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border"
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-4 h-4 rounded-full ${item.color} mr-3`}
                          ></div>
                          <span className="font-medium text-gray-900">
                            {item.category}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">
                            GHS {item.amount * 24}
                          </p>
                          <p className="text-sm text-gray-600">Monthly</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Weekly Banking Routine
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">
                      Every Evening (8:00 PM):
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Count total daily sales (target: GHS 445)</li>
                      <li>• Split money into 7 separate accounts</li>
                      <li>• Record all transactions</li>
                      <li>• Plan next day's strategy</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">
                      Every Sunday:
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Transfer weekly amounts to proper accounts</li>
                      <li>• Review daily targets vs. actual performance</li>
                      <li>• Plan next week's strategy</li>
                      <li>• Document all transactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Locations Tab */}
          {activeTab === "locations" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🏪 Location Strategy
                </h3>
                <p className="text-gray-600">
                  Proven locations with established customer bases and new
                  high-potential areas
                </p>
              </div>

              <div className="space-y-8">
                {locationStrategy.map((business, businessIndex) => (
                  <div
                    key={businessIndex}
                    className="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                      {business.business}
                    </h4>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {business.locations.map((location, locationIndex) => (
                        <div
                          key={locationIndex}
                          className="bg-gray-50 p-4 rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">
                              {location.name}
                            </h5>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                location.status === "Proven"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {location.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            {location.customers}
                          </p>
                          <p className="text-sm font-medium text-gray-800">
                            {location.revenue}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  Mobile Units Strategy
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Event Catering
                    </h5>
                    <p className="text-sm text-gray-600">
                      Weddings, corporate events, festivals
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Door-to-Door
                    </h5>
                    <p className="text-sm text-gray-600">
                      Residential areas, offices, schools
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Special Locations
                    </h5>
                    <p className="text-sm text-gray-600">
                      Beaches, parks, tourist areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  📦 Product Strategy
                </h3>
                <p className="text-gray-600">
                  Proven products with established demand and premium options
                  for higher margins
                </p>
              </div>

              <div className="space-y-8">
                {productStrategy.map((business, businessIndex) => (
                  <div
                    key={businessIndex}
                    className="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        {business.business}
                      </h4>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {business.averageSale}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {business.products.map((product, productIndex) => (
                        <div
                          key={productIndex}
                          className="bg-gray-50 p-4 rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">
                              {product.name}
                            </h5>
                            <span className="text-lg font-bold text-blue-600">
                              {product.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            {product.sales}
                          </p>
                          <p className="text-sm font-medium text-gray-800">
                            {product.margin}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-yellow-600" />
                  Revenue Optimization Strategy
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">
                      Upselling Techniques:
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Bundle deals (popcorn + ice cream)</li>
                      <li>• Premium product recommendations</li>
                      <li>• Event catering packages</li>
                      <li>• Corporate bulk orders</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">
                      Customer Retention:
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Loyalty program rewards</li>
                      <li>• Quality consistency</li>
                      <li>• Customer feedback integration</li>
                      <li>• Referral incentives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Guarantee Tab */}
          {activeTab === "guarantee" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🔒 Investor Return Guarantee
                </h3>
                <p className="text-gray-600">
                  Detailed timeline and backup plans ensuring your returns are
                  protected
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  📊 Monthly Returns (Accumulated for Half-Yearly Payouts)
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      month: "February",
                      return: "GHS 5,375",
                      profit: "GHS 3,200",
                    },
                    {
                      month: "March",
                      return: "GHS 5,375",
                      profit: "GHS 3,600",
                    },
                    {
                      month: "April",
                      return: "GHS 5,375",
                      profit: "GHS 4,000",
                    },
                    { month: "June", return: "GHS 5,375", profit: "GHS 4,800" },
                    { month: "July", return: "GHS 5,375", profit: "GHS 5,200" },
                    {
                      month: "August",
                      return: "GHS 5,375",
                      profit: "GHS 4,529",
                    },
                  ].map((month, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900">{month.month}</h5>
                      <p className="text-lg font-bold text-blue-600">
                        {month.return}
                      </p>
                      <p className="text-sm text-gray-600">
                        From {month.profit} profit
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">
                    Total Monthly Returns: GHS 32,250 (6 months)
                  </p>
                  <p className="text-gray-600">
                    Paid out in two installments of GHS 32,250 each
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white">
                <h4 className="text-2xl font-bold mb-4">
                  Half-Yearly Payout Schedule
                </h4>
                <p className="text-blue-100 mb-6">
                  Monthly returns accumulate and are paid out twice a year
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      period: "First Half (Feb-Apr)",
                      amount: "GHS 32,250",
                      source: "GHS 10,800 profit",
                      months: "February, March, April",
                    },
                    {
                      period: "Second Half (Jun-Aug)",
                      amount: "GHS 32,250",
                      source: "GHS 14,529 profit",
                      months: "June, July, August",
                    },
                  ].map((payout, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-20 p-4 rounded-lg"
                    >
                      <h5 className="font-bold text-lg">{payout.period}</h5>
                      <p className="text-2xl font-bold mb-1">{payout.amount}</p>
                      <p className="text-blue-100 text-sm">{payout.source}</p>
                      <p className="text-blue-100 text-xs mt-1">
                        {payout.months}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xl font-bold">Total: GHS 64,500</p>
                  <p className="text-blue-100">
                    First payout in April: GHS 32,250 | Second payout in August:
                    GHS 32,250
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    Risk Mitigation
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Conservative projections (60% of potential)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Multiple revenue streams reduce dependency
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Academic calendar alignment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Proven business model
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Business Sustainability
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Established customer base
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Strategic location planning
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Experienced team management
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Multiple expansion opportunities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  Success Metrics & Milestones
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">
                      Weekly Targets (6 Working Days):
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>
                        • Week 1-4: GHS 2,000/week, establish market presence
                      </li>
                      <li>• Week 5-8: GHS 3,000/week, expand operations</li>
                      <li>• Week 9-12: GHS 4,000/week, optimize performance</li>
                      <li>• Week 13-16: GHS 5,000/week, scale operations</li>
                      <li>
                        • Week 17-20: GHS 4,500/week, maintain performance
                      </li>
                      <li>
                        • Week 21-24: GHS 4,000/week, prepare for completion
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">
                      Monthly Milestones:
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• February: Break-even, establish operations</li>
                      <li>• March: 20% of annual target, prove concept</li>
                      <li>• April: 35% of annual target, optimize systems</li>
                      <li>• June: 60% of annual target, scale operations</li>
                      <li>• July: 80% of annual target, market leadership</li>
                      <li>• August: 100% of annual target, complete success</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestorPlan;
