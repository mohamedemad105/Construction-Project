import { motion } from "motion/react";
import { Building2, Ruler, Wrench, ClipboardCheck, PaintBucket, Cog, CheckCircle } from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";
import { Button } from "../components/Button";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Building Construction",
      description: "Full-scale construction services from foundation to completion with the highest quality standards and attention to detail."
    },
    {
      icon: Ruler,
      title: "Architecture Design",
      description: "Innovative and functional architectural designs that bring your vision to life with modern aesthetics and practicality."
    },
    {
      icon: Wrench,
      title: "Renovation",
      description: "Transform existing spaces with expert renovation and modernization services tailored to your needs."
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project oversight ensuring timely delivery, budget compliance, and seamless coordination."
    },
    {
      icon: PaintBucket,
      title: "Interior Design",
      description: "Create stunning interiors that blend aesthetics with functionality for residential and commercial spaces."
    },
    {
      icon: Cog,
      title: "Engineering Solutions",
      description: "Advanced engineering services for complex structural and technical challenges with innovative approaches."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Initial meeting to understand your vision, requirements, and budget constraints."
    },
    {
      number: "02",
      title: "Planning",
      description: "Detailed project planning, design development, and timeline creation."
    },
    {
      number: "03",
      title: "Execution",
      description: "Professional construction with regular updates and quality checkpoints."
    },
    {
      number: "04",
      title: "Delivery",
      description: "Final inspection, handover, and post-completion support."
    }
  ];

  const benefits = [
    "Expert team with 25+ years of experience",
    "State-of-the-art equipment and technology",
    "Sustainable and eco-friendly practices",
    "Transparent pricing and communication",
    "On-time project delivery guarantee",
    "Comprehensive warranty coverage",
    "24/7 customer support",
    "Certified and insured professionals"
  ];

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1609867271967-a82f85c48531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Services"
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
              Our <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive construction solutions designed to meet every aspect of your building needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to completion, we provide end-to-end construction services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional construction projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose BuildCo?
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We combine decades of experience with cutting-edge technology to deliver construction projects that exceed expectations. Our commitment to quality, sustainability, and client satisfaction sets us apart.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1628147938540-a1139bee1841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Construction professional"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-12">
              Contact us today for a free consultation and discover how we can bring your construction project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="text-lg">
                Request a Quote
              </Button>
              <Button variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-gray-900">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
