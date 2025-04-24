import { Check, X } from "lucide-react"

export default function PricingPlans() {
  // Pricing data
  const pricingTiers = [
    {
      name: "Basic",
      price: 9,
      description: "Essential features for small teams and individuals",
      features: [
        { name: "Up to 5 users", included: true },
        { name: "10GB storage", included: true },
        { name: "Basic analytics", included: true },
        { name: "24/7 support", included: false },
        { name: "Custom branding", included: false },
        { name: "Advanced security", included: false },
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: 29,
      description: "Advanced features for growing businesses",
      features: [
        { name: "Up to 20 users", included: true },
        { name: "50GB storage", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24/7 support", included: true },
        { name: "Custom branding", included: true },
        { name: "Advanced security", included: false },
      ],
      buttonText: "Get Pro",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: 99,
      description: "Complete solution for large organizations",
      features: [
        { name: "Unlimited users", included: true },
        { name: "Unlimited storage", included: true },
        { name: "Custom analytics", included: true },
        { name: "Priority support", included: true },
        { name: "Custom branding", included: true },
        { name: "Advanced security", included: true },
      ],
      buttonText: "Contact Sales",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Choose the plan that's right for your business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${
                tier.isPopular ? "border-gray-900 shadow-lg" : "border-gray-200 shadow-sm"
              } p-8 flex flex-col`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-gray-600">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-500"}>{feature.name}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium ${
                  tier.isPopular
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                } transition-colors`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
