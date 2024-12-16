import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Tools = () => {
  const tools = [
    {
      name: "Jenkins",
      description: "Servidor de automatización open source líder",
      category: "CI/CD"
    },
    {
      name: "Tekton Pipelines",
      description: "Marco de CI/CD nativo de Kubernetes",
      category: "CI/CD"
    },
    {
      name: "Spinnaker",
      description: "Plataforma de CD para entornos multicloud",
      category: "CD"
    },
    {
      name: "GoCD",
      description: "Servidor enfocado en modelado y visualización",
      category: "CI/CD"
    },
    {
      name: "Docker",
      description: "Plataforma de contenedores",
      category: "Contenedores"
    },
    {
      name: "Kubernetes",
      description: "Orquestación de contenedores",
      category: "Orquestación"
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Herramientas de CI/CD</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{tool.name}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {tool.category}
              </span>
            </div>
            <p className="text-gray-700">{tool.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 bg-gradient-to-r from-gray-50 via-white to-gray-100 shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Criterios de Selección</h2>
        <div className="flex gap-6 justify-center flex-wrap">
          {[
            "Integración con herramientas existentes",
            "Facilidad de uso y configuración",
            "Soporte y documentación",
            "Escalabilidad y rendimiento"
          ].map((criterio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg font-medium">{criterio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <div>
          <Link to="/security">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Atras
            </button>
          </Link>
        </div>
        <div>
          <Link to="/questionary">
            <button className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
              Dar Prueba
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tools;