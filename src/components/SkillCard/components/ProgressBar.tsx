

export type  ProgressBarProps = {
    progressPercentage?: number;
}

export const ProgressBar = ({progressPercentage}: ProgressBarProps) => {
  return (
    <div className="mt-2 h-4 w-full bg-black border-y border-x border-black">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full bg-primary`}
      ></div>
    </div>
  );
};

