import { motion } from "motion/react";

interface StatCardProps {
  number: string;
  label: string;
  suffix?: string;
}

export function StatCard({ number, label, suffix = "+" }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent mb-2">
        {number}{suffix}
      </div>
      <div className="text-gray-400 text-lg">{label}</div>
    </motion.div>
  );
}
