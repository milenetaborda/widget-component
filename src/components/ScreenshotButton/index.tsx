import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useCallback, useContext, useState } from 'react';
import { Loading } from 'src/components/LoadingButton';
import { TemplateContext } from 'src/context/TemplateContext';

export const ScreenshotButton = () => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  const { screenshot, setScreenshot } = useContext(TemplateContext);

  const handleTakenScreenshot = useCallback(async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    setScreenshot(base64image);
    setIsTakingScreenshot(false);
  }, [setScreenshot, setIsTakingScreenshot]);

  if (screenshot) {
    return (
      <button
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        type="button"
        onClick={() => setScreenshot(null)}
        style={{ backgroundImage: `url(${screenshot})`, backgroundPosition: 'right bottom', backgroundSize: 180 }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offsite-2 focus:ring-offsite-zinc-900 focus:ring-brand-500 transition-colors "
      type="button"
      onClick={handleTakenScreenshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
