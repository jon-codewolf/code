import { createSignal } from "solid-js";

export { useAudio };

function useAudio({ alertSound }: { alertSound: string }) {
  const [audio, setAudio] = createSignal<HTMLAudioElement>();
  function playSound(count: number = 1) {
    const handleEnded = () => {
      audio()?.removeEventListener("ended", handleEnded);
      if (count < 3) {
        playSound(count + 1);
      }
    };
    audio()?.play();
    audio()?.addEventListener("ended", handleEnded);
  }
  return {
    audioComponent: <audio ref={setAudio} src={alertSound}></audio>,
    playSound
  };
}
