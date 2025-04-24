import { BarChart3, Users, Zap, ArrowUpRight, Sparkles, Globe, Clock, Trophy } from "lucide-react"

const BentoGrid = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Features & Benefits</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to take your business to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Large feature card */}
          <div className="row-span-2 col-span-1 md:col-span-2 bg-gray-50 rounded-3xl p-8 hover:shadow-md transition-shadow overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="bg-gray-900 text-white p-3 rounded-2xl">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Advanced Analytics</h3>
              <p className="mt-4 text-gray-600 max-w-lg">
                Gain valuable insights with our comprehensive analytics dashboard. Track performance, monitor growth,
                and make data-driven decisions to optimize your business strategy.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Monthly Growth</p>
                  <p className="text-2xl font-bold text-gray-900">+27%</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Active Users</p>
                  <p className="text-2xl font-bold text-gray-900">12.5k</p>
                </div>
              </div>
            </div>
          </div>

          {/* User engagement card */}
          <div className="bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-shadow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">
                  <Users className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">User Engagement</h3>
              <p className="mt-2 text-gray-600">
                Foster meaningful connections and boost engagement with interactive features.
              </p>
            </div>
          </div>

          {/* Performance card */}
          <div className="bg-gray-900 text-white rounded-3xl p-6 hover:shadow-md transition-shadow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="bg-gray-800 p-3 rounded-2xl">
                  <Zap className="h-6 w-6 text-yellow-400" />
                </div>
                <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Lightning Fast</h3>
              <p className="mt-2 text-gray-300">
                Optimized performance ensures your application runs smoothly and efficiently.
              </p>
            </div>
          </div>

          {/* Global reach card */}
          <div className="bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-shadow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="bg-green-100 text-green-600 p-3 rounded-2xl">
                  <Globe className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Global Reach</h3>
              <p className="mt-2 text-gray-600">
                Connect with customers worldwide with our international infrastructure.
              </p>
            </div>
          </div>

          {/* AI-powered card */}
          <div className="col-span-1 md:col-span-2 bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-shadow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-2xl">
                  <Sparkles className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">AI-Powered Insights</h3>
              <p className="mt-2 text-gray-600">
                Leverage the power of artificial intelligence to uncover hidden patterns and opportunities in your data.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Smart Predictions
                </span>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Automated Reports
                </span>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Trend Analysis
                </span>
              </div>
            </div>
          </div>

          {/* Real-time updates card */}
          <div className="bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-shadow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl">
                  <Clock className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Real-time Updates</h3>
              <p className="mt-2 text-gray-600">Stay informed with instant notifications and live data streams.</p>
            </div>
          </div>

          {/* Award winning card */}
          <div className="row-span-1 col-span-1 md:col-span-2 bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-shadow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex items-center h-full">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-2xl mr-6">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Award-Winning Platform</h3>
                <p className="mt-2 text-gray-600">
                  Recognized for excellence in innovation, design, and customer satisfaction.
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-gray-900 transition-colors ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
