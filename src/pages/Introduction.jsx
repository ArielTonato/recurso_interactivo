import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Pipeline from '../components/Pipeline';
import PageContainer from '../components/layout/PageContainer';
import InfoCard from '../components/cards/InfoCard';
import BenefitsList from '../components/lists/BenefitsList';

const benefits = [
  'Evita errores y fallas de código',
  'Disminuye la complejidad',
  'Aumenta la eficiencia',
  'Optimiza los flujos de trabajo'
];

const Introduction = () => {
  return (
    <PageContainer title="CI/CD: Integración y Distribución Continuas">
      <div className="mb-8">
        <Pipeline />
      </div>

      <InfoCard title="¿Qué es CI/CD?" className="mb-6">
        <p className="text-gray-700 mb-4">
          CI/CD Fisei es la sigla para la integración y la distribución o implementación continuas,
          cuyo objetivo es mejorar y agilizar el ciclo de vida de desarrollo del software.
        </p>
      </InfoCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Beneficios Clave</h3>
          <BenefitsList benefits={benefits} />
        </div>

        <InfoCard title="¿Qué es CI/CD?" className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Importancia</h3>
          <p className="text-gray-700">
            La CI/CD automatiza la intervención manual, reduce el tiempo de inactividad
            y agiliza los lanzamientos de código, permitiendo una mejor respuesta a los
            comentarios de los usuarios.
          </p>
        </InfoCard>
      </div>

      <div className="mt-8 flex justify-end">
        <div>
          <Link to="/ci">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              Siguiente
            </button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default Introduction;
