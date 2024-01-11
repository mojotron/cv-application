/* eslint-disable react/self-closing-comp */

type PropsType = {
  maxValue: number;
  currentValue: number;
  showPercentage?: boolean;
};

function ProgressBar({
  maxValue,
  currentValue,
  showPercentage = false,
}: PropsType) {
  const filled = Math.round((currentValue / maxValue) * 100);

  return (
    <div className="h-4 w-full bg-neutral-200 p-0.5 rounded-md">
      <div
        className="h-full rounded-md bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600"
        style={{ width: `${filled}%` }}>
        {showPercentage ? (
          <div className="text-cyan-100 text-xs text-right relative right-1 bottom-0.5">
            {filled}%
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProgressBar;
// USING HTML PROGRESS ELEMENT
// return (
//     <progress
//       className="
//         [&::-webkit-progress-bar]:rounded-lg
//         [&::-webkit-progress-value]:rounded-lg
//         [&::-webkit-progress-bar]:bg-slate-300
//         [&::-webkit-progress-value]:bg-violet-400
//         [&::-moz-progress-bar]:bg-violet-400
//         [&::-moz-progress-bar]:rounded-lg
//         [&::-moz-progress-value]:rounded-lg
//         rounded-lg"
//       max={maxValue}
//       value={currentValue}>
//       {currentValue}
//     </progress>
// );
