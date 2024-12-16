import React from 'react';

const PageContainer = ({ children, title }) => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      {children}
    </div>
  );
};

export default PageContainer;