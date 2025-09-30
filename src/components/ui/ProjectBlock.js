import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectBlock({ title, description, emoji, image, link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className='relative w-full sm:w-64 h-64 bg-gray-700 border-4 border-gray-800 flex items-center justify-center overflow-hidden cursor-pointer'
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        style={{
          boxShadow:
            'inset -5px -5px 0 2px rgba(0,0,0,0.3), inset 5px 5px 0 2px rgba(255,255,255,0.2)',
        }}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className='max-w-full max-h-full object-contain p-2'
          />
        ) : (
          <span className='text-6xl'>{emoji}</span>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6'
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className='bg-gray-800 p-6 sm:p-8 rounded-lg max-w-2xl w-full mx-4'
              style={{
                boxShadow:
                  'inset -5px -5px 0 2px rgba(0,0,0,0.3), inset 5px 5px 0 2px rgba(255,255,255,0.2)',
                border: '4px solid #2C2C2C',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className='text-2xl sm:text-3xl font-bold mb-4 text-white font-pixel'>
                {title}
              </h3>
              <p className='text-sm sm:text-base text-white font-pixel mb-4 whitespace-pre-line'>
                {description}
              </p>

              {link && (
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 underline mb-4 block'
                >
                  Check it out
                </a>
              )}

              <button
                className='bg-green-600 text-white px-4 py-2 rounded font-pixel text-sm sm:text-base'
                style={{
                  boxShadow:
                    'inset -2px -2px 0 1px rgba(0,0,0,0.3), inset 2px 2px 0 1px rgba(255,255,255,0.2)',
                }}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
