import { CloseButton } from 'src/components/CloseButton';
import { IFeedbackType } from 'src/components/WidgetForm';
import { feedbackTypes } from 'src/constants/feedbackTypes';

interface IFeedbackTypeStep {
  onFeedBackTypeChanged: (feedbackType: IFeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedBackTypeChanged }: IFeedbackTypeStep) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedBackTypeChanged(key as IFeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
