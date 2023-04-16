import React from 'react';
import DivCentered from '../../components/DivCentered';
import AnimatedBackground from '../../components/AnimatedBackground';

interface FormLayoutProps {
  component: React.FC;
}

const FormLayout: React.FC<FormLayoutProps> = ({ component: Component }) => {
  return (
    <DivCentered>
      <AnimatedBackground />
      <Component />
    </DivCentered>
  );
};

export default FormLayout;
