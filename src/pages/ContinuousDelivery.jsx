import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const ContinuousDelivery = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Distribución Continua (CD)</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">¿Qué es la Distribución Continua?</h2>
        <p className="text-gray-700">
          La distribución continua automatiza el lanzamiento de código validado en un
          repositorio. Es la extensión natural de la integración continua, asegurando
          que el código esté siempre listo para producción.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            title: "Automatización",
            content: "Automatiza el proceso de pruebas y validación del código"
          },
          {
            title: "Validación",
            content: "Asegura que el código cumpla con los estándares de calidad"
          },
          {
            title: "Preparación",
            content: "Mantiene el código listo para implementación en cualquier momento"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-700">{item.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-400 rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beneficios de CD</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold mb-2">Reducción de Riesgos</h3>
            <p className="text-gray-700">
              Minimiza los riesgos de implementación mediante entregas más pequeñas y frecuentes
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold mb-2">Mayor Eficiencia</h3>
            <p className="text-gray-700">
              Automatiza procesos manuales y reduce el tiempo de entrega
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div>
          <Link to="/ci">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Atras
            </button>
          </Link>
        </div>
        <div>
          <Link to="/deployment">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Siguiente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContinuousDelivery;