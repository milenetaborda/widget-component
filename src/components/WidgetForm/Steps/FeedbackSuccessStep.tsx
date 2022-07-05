import { useContext } from 'react';
import { TemplateContext } from 'src/context/TemplateContext';
import successImageUrl from '../../../assets/success.svg';
import { CloseButton } from '../../CloseButton';

export function FeedbackSuccessStep() {
  const { handleRestartFeedback } = useContext(TemplateContext);

  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="imagem de sucesso" />
        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          onClick={handleRestartFeedback}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offsite-2 focus:ring-offsite-zinc-900 focus:ring-brand-500 transition-colors"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
