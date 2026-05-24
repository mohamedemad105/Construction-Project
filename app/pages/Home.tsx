import { motion } from "motion/react";
import { Building2, Ruler, Wrench, ClipboardCheck, PaintBucket, Cog, Star, ArrowRight } from "lucide-react";
import { Button } from "../components/Button";
import { ServiceCard } from "../components/ServiceCard";
import { ProjectCard } from "../components/ProjectCard";
import { StatCard } from "../components/StatCard";

export default function Home() {
  const services = [
    {
      icon: Building2,
      title: "Building Construction",
      description: "Full-scale construction services from foundation to completion with the highest quality standards."
    },
    {
      icon: Ruler,
      title: "Architecture Design",
      description: "Innovative and functional architectural designs that bring your vision to life."
    },
    {
      icon: Wrench,
      title: "Renovation",
      description: "Transform existing spaces with expert renovation and modernization services."
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project oversight ensuring timely delivery and budget compliance."
    },
    {
      icon: PaintBucket,
      title: "Interior Design",
      description: "Create stunning interiors that blend aesthetics with functionality."
    },
    {
      icon: Cog,
      title: "Engineering Solutions",
      description: "Advanced engineering services for complex structural and technical challenges."
    }
  ];

  const projects = [
    {
      title: "Modern Commercial Center",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Luxury Residential Complex",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Corporate Office Building",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Modern Architecture Hub",
      category: "Mixed-Use",
      image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 5,
      text: "BuildCo transformed our vision into reality. Their attention to detail and commitment to excellence is unmatched."
    },
    {
      name: "Sarah Williams",
      role: "Property Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "Professional, reliable, and innovative. They delivered our project ahead of schedule and exceeded all expectations."
    },
    {
      name: "David Rodriguez",
      role: "Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with BuildCo has been an absolute pleasure. Their expertise in modern construction is second to none."
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Construction site"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building Tomorrow's
              <span className="block bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                Infrastructure Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Premium construction and engineering solutions with over 25 years of excellence in creating iconic structures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="text-lg">
                Start Your Project
              </Button>
              <Button variant="outline" className="text-lg">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Construction team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Building Excellence Since 1998
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We are a premier construction and engineering company dedicated to delivering world-class infrastructure projects. Our commitment to innovation, quality, and sustainability sets us apart in the industry.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">Our Mission</h3>
                  <p className="text-gray-400">Transform visions into structural masterpieces</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">Our Vision</h3>
                  <p className="text-gray-400">Lead the future of sustainable construction</p>
                </div>
              </div>

              <Button variant="primary">
                Learn More About Us
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your unique project requirements
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

      {/* Projects Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our portfolio of exceptional construction projects that define modern architecture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">
              View All Projects
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="500" label="Projects Completed" />
            <StatCard number="250" label="Happy Clients" />
            <StatCard number="25" label="Years of Experience" />
            <StatCard number="150" label="Team Members" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1527335988388-b40ee248d80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Let's bring your vision to life. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="text-lg">
                Get Free Quote
              </Button>
              <Button variant="outline" className="text-lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
