import React from 'react';

const ProgressIndicator = ({ step, totalSteps }) => {
  return (
    <div>
      Step {step} of {totalSteps}
    </div>
  );
};

export default ProgressIndicator;
