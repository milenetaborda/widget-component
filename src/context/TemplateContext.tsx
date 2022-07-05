import { createContext, useState } from 'react';

interface ITemplateProvider {
  children: React.ReactNode;
}

interface ITemplateContext {
  screenshot: string | null;
  setScreenshot: (screenshot: string | null) => void;
}

export const TemplateContext = createContext<ITemplateContext>({} as ITemplateContext);

export const TemplateProvider = ({ children }: ITemplateProvider) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);

  return <TemplateContext.Provider value={{ screenshot, setScreenshot }}>{children}</TemplateContext.Provider>;
};
