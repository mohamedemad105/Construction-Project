import { motion } from "motion/react";
import { Award, Users, Target, TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "../components/Button";
import { StatCard } from "../components/StatCard";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent communication and honest practices are at the core of our business."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaboration and synergy drive our success and client satisfaction."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace cutting-edge technology and modern construction techniques."
    },
    {
      icon: Target,
      title: "Commitment",
      description: "Dedicated to delivering projects on time and within budget, every time."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Consistent performance and dependable results you can count on."
    }
  ];

  const timeline = [
    { year: "1998", title: "Company Founded", description: "Started with a vision to transform construction industry" },
    { year: "2005", title: "Major Expansion", description: "Expanded operations to three new states" },
    { year: "2012", title: "Industry Recognition", description: "Received multiple awards for sustainable building" },
    { year: "2018", title: "International Projects", description: "First international construction project completed" },
    { year: "2023", title: "Technology Integration", description: "Implemented AI-driven project management systems" }
  ];

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1577199001468-44c049e7603f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">BuildCo</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A legacy of excellence in construction and engineering spanning over 25 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Founded in 1998, BuildCo has grown from a small local contractor to one of the most respected construction firms in the region. Our journey has been marked by an unwavering commitment to quality, innovation, and client satisfaction.
              </p>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                With over 500 successful projects completed, we've built everything from residential complexes to commercial skyscrapers, each project reflecting our dedication to excellence and attention to detail.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Today, we continue to push the boundaries of what's possible in construction, leveraging cutting-edge technology and sustainable practices to create buildings that stand the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1621511075938-f03482369feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Construction"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="500" label="Projects Completed" />
            <StatCard number="250" label="Happy Clients" />
            <StatCard number="25" label="Years of Experience" />
            <StatCard number="150" label="Team Members" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Key milestones that have shaped BuildCo into the industry leader we are today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-amber-600 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 flex-shrink-0">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Be part of the next chapter in our story. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="text-lg">
                Start Your Project
              </Button>
              <Button variant="outline" className="text-lg">
                View Careers
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
