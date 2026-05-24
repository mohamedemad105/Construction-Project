import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

export function ProjectCard({ title, category, image }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl group cursor-pointer h-96"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-2xl text-white">{title}</h3>
      </div>
    </motion.div>
  );
}
