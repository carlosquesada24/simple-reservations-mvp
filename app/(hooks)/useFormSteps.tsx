import { useState } from "react";

const useFormSteps = (initialStep: number = 0, maximumStep: number) => {
  const [currentFormStep, setCurrentFormStep] = useState<number>(initialStep);

  const advanceToNextFormStep = () =>
    setCurrentFormStep((previousStep) =>
      currentFormStep === maximumStep ? currentFormStep : previousStep + 1,
    );

  const backToPreviousFormStep = () =>
    setCurrentFormStep(currentFormStep > 0 ? currentFormStep - 1 : 0);

  const resetStep = () => setCurrentFormStep(initialStep);

  return {
    currentFormStep,
    advanceToNextFormStep,
    backToPreviousFormStep,
    resetStep,
  };
};

export default useFormSteps;
