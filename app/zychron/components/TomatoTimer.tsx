import { css } from "solid-styled-components";
import { secondsTo } from "../utils/util";
import { useCountdown } from "../composables/useCountdown";
import { useAudio } from "../composables/useAudio";
import { createEffect } from "solid-js";

export const TomatoTimer = () => {
  const countdown = useCountdown();
  const { setTime, start, stop, time, onComplete } = countdown;
  const isRunning = () => !!countdown.timer();
  const { audioComponent, playSound } = useAudio({
    alertSound: "vintage-alert-notification.mp3",
  });

  let initalTime = 60 * 25
  onComplete(playSound);

  createEffect(() => {
    document.title = `(${secondsTo(time(), 'mm-ss')}) Zychron`
  });

  return (
    <div
      class={css`
        padding: 6rem 1rem;
        max-width: 30rem;
        margin: 0 auto;
        text-align: center;
        h2 {
          font-size: 3rem;
          margin-bottom: -0.8rem;
        }
        .subtitle {
          font-size: 1rem;
        }
        .timer {
          font-size: 5rem;
          margin: 1rem 0;
          font-family: monospace;
        }
        button {
          cursor: pointer;
          background-color: transparent;
          padding: 0.6rem 1rem;
          border-radius: 1rem;
          outline: 0.08rem solid;
          width: 100%;
          grid-column: span 1;

          &.start {
            outline-color: green;
            color: green;
          }
          &.break {
            outline-color: #7093ea;
            color: #7093ea;
          }
          &.pause {
            outline-color: yellow;
            color: yellow;
          }
          &.reset {
            outline-color: red;
            color: red;
          }
        }
        .button-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
          gap: 1.3rem;
        }
      `}
    >
      {audioComponent}
      <h2>Pomodoro</h2>
      <p class="subtitle">Time management technique</p>

      <p class="timer">{secondsTo(time(), "mm-ss")}</p>
      <div class="button-container">
        <button
          onClick={() => {
            isRunning() ? stop() : start();
          }}
          classList={{
            start: !isRunning(),
            pause: !!isRunning(),
          }}
        >
          {isRunning() ? "Pause" : "Start"}
        </button>
        <button onClick={() => {
          setTime(initalTime)
        }} class="reset">
          Reset
        </button>
        <button onClick={() => {
          initalTime = 60 * 25
           setTime(initalTime)
        }} class="break">
          25 minutes
        </button>
        <button onClick={() => {
          initalTime = 60* 5
          setTime(initalTime)
        }} class="break">
          5 minutes
        </button>
      </div>
    </div>
  );
};
function title(): string {
  throw new Error("Function not implemented.");
}

