import { useState } from 'react';
import { FeedbackContentStep } from 'src/components/Steps/FeedbackContentStep';
import { FeedbackTypeStep } from 'src/components/Steps/FeedbackTypeStep';
import { feedbackTypes } from 'src/constants/feedbackTypes';

export type IFeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<IFeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤ por{' '}
        <a className="underline underline-offset-2" href="https://github.com/milenetaborda">
          Milene Taborda
        </a>
      </footer>
    </div>
  );
}
