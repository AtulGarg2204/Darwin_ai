import "./style.css"

export default function AutoScrollReviews() {
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "This product has completely transformed our workflow. The interface is intuitive and the features are exactly what we needed. Highly recommend!",
      avatar: "/diverse-group-city.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "I've tried many similar solutions, but this one stands out for its performance and reliability. The support team is also incredibly responsive.",
      avatar: "/diverse-group-city.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      content:
        "We've seen a 40% increase in productivity since implementing this tool. It's been a game-changer for our team collaboration.",
      avatar: "/diverse-group-city.png",
      rating: 5,
    },
    {
      id: 4,
      name: "David Kim",
      role: "UX Designer",
      content:
        "The attention to detail in this product is impressive. It's clear the team really understands the needs of creative professionals.",
      avatar: "/diverse-group-city.png",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "E-commerce Director",
      content:
        "Our conversion rates have improved significantly since we started using this platform. The analytics features are particularly valuable.",
      avatar: "/diverse-group-city.png",
      rating: 4,
    },
    {
      id: 6,
      name: "James Wilson",
      role: "CTO",
      content:
        "From a technical perspective, the architecture is solid and integration was seamless. Exactly what we were looking for in an enterprise solution.",
      avatar: "/diverse-group-city.png",
      rating: 5,
    },
  ]

  return (
    <div className="relative w-full py-10 overflow-hidden bg-white ">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>

      {/* Container with fade effects */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Left fade */}
        <div className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

        {/* Scrolling container */}
        <div className="overflow-hidden">
          <div className="flex gap-6 py-4 animate-scroll">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-[350px] bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}

            {/* Duplicate reviews for continuous scrolling */}
            {reviews.map((review) => (
              <div
                key={`duplicate-${review.id}`}
                className="flex-shrink-0 w-[350px] bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  )
}
