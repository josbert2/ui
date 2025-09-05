import React from 'react';
import ComponentsPreviewCheck from './ComponentsPreviewCheck';

export const Wrapper  = ({ name, children }) => {
  // Obtener el contenido del código desde children
  const code = React.Children.toArray(children)
    .find(child => typeof child === 'object')
    ?.props?.children || '';

  return <ComponentsPreviewCheck name={name} code={code} />;
};