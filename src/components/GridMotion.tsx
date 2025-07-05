import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  items: React.ReactNode[];
};

const GridMotion = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center"
        >
          {typeof item === 'string' && item.startsWith('http') ? (
            <img
              src={item}
              alt={`item-${index}`}
              className="w-full h-auto object-cover rounded"
            />
          ) : (
            item
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default GridMotion;
