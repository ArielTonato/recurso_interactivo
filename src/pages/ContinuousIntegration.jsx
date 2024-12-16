import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const ContinuousIntegration = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Integración Continua (CI)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">¿Qué es CI?</h2>
          <p className="text-gray-700">
            La integración continua es un proceso de automatización donde los desarrolladores
            fusionan los cambios de código en un repositorio compartido de forma frecuente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Detección temprana de errores</li>
            <li>Reducción de conflictos de código</li>
            <li>Mayor calidad del software</li>
            <li>Desarrollo más ágil</li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Proceso de CI</h2>
        <div className="flex flex-row items-center justify-between space-y-4">
          {[
            { step: 1, text: "Desarrolladores escriben código" },
            { step: 2, text: "Código se sube al repositorio" },
            { step: 3, text: "Se ejecutan pruebas automatizadas" },
            { step: 4, text: "Se genera retroalimentación" }
          ].map((item) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.step * 0.2 }}
              className="flex flex-col items-center bg-gray-50 p-4 rounded-lg"
            >
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                {item.step}
              </span>
              <span className="text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div>
          <Link to="/">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Atras
            </button>
          </Link>
        </div>
        <div>
          <Link to="/cd">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Siguiente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContinuousIntegration;