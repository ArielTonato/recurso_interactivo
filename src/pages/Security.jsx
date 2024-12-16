import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
const Security = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Seguridad en CI/CD</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <ShieldCheckIcon className="h-8 w-8 text-green-500 mr-3" />
          <h2 className="text-2xl font-semibold">Importancia de la Seguridad</h2>
        </div>
        <p className="text-gray-700">
          La seguridad en CI/CD es fundamental para proteger los canales de código y
          garantizar una distribución segura del software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 rounded-lg p-6"
        >
          <div className="flex items-center mb-4">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-500 mr-2" />
            <h3 className="text-xl font-semibold">Riesgos Principales</h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span>Divulgación de información confidencial</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span>Uso de códigos no seguros</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span>Acceso no autorizado</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-green-50 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Medidas de Seguridad</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>Pruebas de seguridad automatizadas</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>Verificación de dependencias</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>Control de acceso y autenticación</span>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">DevSecOps</h2>
          <p className="text-gray-700 mb-4">
            DevSecOps integra la seguridad como una responsabilidad compartida durante
            todo el ciclo de vida del desarrollo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Seguridad desde el diseño",
              "Automatización de pruebas de seguridad",
              "Monitoreo continuo"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 text-center"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div>
          <Link to="/deployment">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Atras
            </button>
          </Link>
        </div>
        <div>
          <Link to="/tools">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Siguiente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Security;