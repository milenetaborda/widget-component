import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useCallback, useContext, useState } from 'react';
import { CloseButton } from 'src/components/CloseButton';
import { ScreenshotButton } from 'src/components/ScreenshotButton';
import { feedbackTypes } from 'src/constants/feedbackTypes';
import { TemplateContext } from 'src/context/TemplateContext';

export function FeedbackContentStep() {
  const [comment, setComment] = useState('');
  const { setFeedbackSent, feedbackType, handleRestartFeedback } = useContext(TemplateContext);

  const feedbackTypeInfo = feedbackType && feedbackTypes[feedbackType];

  const handleSubmitFeedback = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      console.log(comment);

      setFeedbackSent(true);
    },
    [comment, setFeedbackSent]
  );

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo?.image.source} alt={feedbackTypeInfo?.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo?.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-400 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton />

          <button
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offsite-2 focus:ring-offsite-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            type="submit"
            disabled={!comment}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
