import { useContext } from 'react';
import { TemplateContext } from 'src/context/TemplateContext';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export function WidgetForm() {
  const { feedbackSent, feedbackType } = useContext(TemplateContext);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? <FeedbackSuccessStep /> : <>{!feedbackType ? <FeedbackTypeStep /> : <FeedbackContentStep />}</>}

      <footer className="text-xs text-neutral-400">
        Feito com ❤ por{' '}
        <a className="underline underline-offset-2" href="https://github.com/milenetaborda">
          Milene Taborda
        </a>
      </footer>
    </div>
  );
}
