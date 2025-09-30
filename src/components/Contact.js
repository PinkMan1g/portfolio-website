import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white font-retro">
          📬 Contact
        </h2>
        <p className="text-white text-lg sm:text-xl mb-6">
          Feel free to reach out if you want to collaborate, ask questions about my projects, or just chat about Minecraft development!
        </p>
        <ul className="text-white text-lg sm:text-xl space-y-2">
          <li>💬 <strong>Discord:</strong> aleksa.1g</li>
          <li>🐦 <strong>Twitter:</strong> <a href="https://twitter.com/_lek_a_" className="underline text-blue-400" target="_blank" rel="noopener noreferrer">@_lek_a_</a></li>
          <li>📧 <strong>Email:</strong> <a href="mailto:business.popovic@gmail.com" className="underline text-blue-400">business.popovic@gmail.com</a></li>
          <li>🦀 <strong>Bucket of Crabs:</strong> <a href="https://www.bucketofcrabs.net/u/aleksa_244" className="underline text-blue-400" target="_blank" rel="noopener noreferrer">aleksa_244</a></li>
        </ul>
      </motion.div>
    </section>
  );
}
