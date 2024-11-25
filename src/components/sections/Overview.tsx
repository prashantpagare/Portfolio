import { motion } from 'framer-motion';

export const Overview = () => {
  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Overview
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-purple-200 leading-relaxed">
              With over 8 years of experience in software testing, I specialize in creating robust test automation frameworks
              and implementing comprehensive testing strategies. My expertise spans across web applications, APIs, and
              mobile testing, ensuring the delivery of high-quality software products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};