import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContinuousDeployment = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Implementación Continua</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Automatización Total</h2>
          <p className="text-gray-700">
            La implementación continua automatiza todo el proceso hasta la producción,
            incluyendo el lanzamiento automático de los cambios a los usuarios finales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Características Clave</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Despliegue automático a producción</li>
            <li>Retroalimentación inmediata</li>
            <li>Ciclos de desarrollo más cortos</li>
            <li>Mayor velocidad de entrega</li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >

        <div className="bg-purple-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Requisitos Importantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Pruebas Automatizadas",
                content: "Conjunto completo de pruebas automatizadas para garantizar la calidad"
              },
              {
                title: "Monitoreo Continuo",
                content: "Sistemas de monitoreo para detectar problemas en tiempo real"
              },
              {
                title: "Rollback Automático",
                content: "Capacidad de revertir cambios automáticamente si se detectan problemas"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-4"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="mt-8 flex justify-between">
        <div>
          <Link to="/cd">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Atras
            </button>
          </Link>
        </div>
        <div>
          <Link to="/security">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Siguiente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContinuousDeployment;