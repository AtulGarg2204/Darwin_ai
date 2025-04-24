import BentoGrid from "../components/Landing/BentoGrid"
import Footer from "../components/Landing/Footer"
import Header from "../components/Landing/Header"
import PricingPlans from "../components/Landing/Pricing"
import AutoScrollReviews from "../components/Landing/Reviews"
const LandingPage = () => {
  return (
    <div className="h-full flex flex-col bg-white text-black ">
      {/* Header */}
      <Header />

      {/* Main Heading Section */}
      <section className="flex items-center h-screen">
        <div className="flex justify-center items-center flex-col w-screen">
          <h1 className="text-6xl font-playfair">Evolve Your Workflow with Darwin</h1>
          <p className="text-gray-500 text-lg w-1/2 text-center">Summarize, analyze, visualize — all through the power of prompt. Darwin is your all-in-one AI agent that controls the browser, crunches numbers, and turns insights into dashboard</p>
          <div className="space-x-5 mt-4">
            <button className="bg-slate-300 rounded-3xl px-12 py-3 shadow-md hover:scale-105 hover:bg-slate-400 transition-all hover:text-white">Try Now</button>
            <button className="bg-slate-300 rounded-3xl px-12 py-3 shadow-md hover:scale-105 hover:bg-slate-400 transition-all hover:text-white">Know More</button>
          </div>
        </div>
      </section>
      <section className="mb-20 flex-grow">
        <BentoGrid />
      </section>
      <section className="mb-20 flex-grow">
        <PricingPlans />
      </section>
      <section className="mb-20 flex-grow">
        <AutoScrollReviews />
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage