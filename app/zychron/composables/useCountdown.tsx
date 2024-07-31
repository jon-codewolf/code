import { createSignal } from "solid-js";

export { useCountdown, time };

let onComplete: Function = () => {};
const [timer, setTimer] = createSignal<Timer>();
const [time, setTime] = createSignal(60 * 25);
const isRunning = () => timer();

const stop = () => {
  if (timer()) {
    clearInterval(timer());
    setTimer(undefined);
  }
};

const start = () => {
  if (timer() || !time()) return;
  setTimer(setInterval(decrementCount, 1000));
};

const decrementCount = () => {
  setTime((count) => {
    if (count > 0) {
      return count - 1;
    }
    stop();
    onComplete();
    return count;
  });
};

const useCountdown = () => ({
  start,
  stop,
  setTime,
  timer,
  time,
  isRunning,
  onComplete(fn: Function) {
    onComplete = fn;
  },
});