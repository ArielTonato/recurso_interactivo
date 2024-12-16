import React from 'react';
import PipelineStage from './pipeline/PipelineStage';
import PipelineConnector from './pipeline/PipelineConnector';

const Pipeline = () => {
  const stages = [
    { name: 'Código', color: 'bg-blue-500' },
    { name: 'Build', color: 'bg-green-500' },
    { name: 'Test', color: 'bg-yellow-500' },
    { name: 'Deploy', color: 'bg-purple-500' }
  ];

  return (
    <div className="w-full p-8">
      <div className="flex justify-between items-center">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.name}>
            <PipelineStage name={stage.name} color={stage.color} />
            {index < stages.length - 1 && <PipelineConnector />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Pipeline;