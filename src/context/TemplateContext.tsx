import { createContext, useCallback, useState } from 'react';
import { feedbackTypes } from 'src/constants/feedbackTypes';

interface ITemplateProvider {
  children: React.ReactNode;
}

export type IFeedbackType = keyof typeof feedbackTypes;

interface ITemplateContext {
  screenshot: string | null;
  feedbackSent: boolean;
  feedbackType: IFeedbackType | null;
  handleRestartFeedback: () => void;
  setScreenshot: (screenshot: string | null) => void;
  setFeedbackSent: (feedbackSent: boolean) => void;
  setFeedbackType: (feedbackType: IFeedbackType | null) => void;
}

export const TemplateContext = createContext<ITemplateContext>({} as ITemplateContext);

export const TemplateProvider = ({ children }: ITemplateProvider) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);
  const [feedbackType, setFeedbackType] = useState<IFeedbackType | null>(null);

  const handleRestartFeedback = useCallback(() => {
    setFeedbackSent(false);
    setScreenshot(null);
    setFeedbackType(null);
  }, [setFeedbackSent, setScreenshot, setFeedbackType]);

  return (
    <TemplateContext.Provider
      value={{
        screenshot,
        setScreenshot,
        feedbackSent,
        setFeedbackSent,
        feedbackType,
        setFeedbackType,
        handleRestartFeedback
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};
