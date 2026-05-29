
import { forwardRef } from "react";

const DateBox = forwardRef(
  ({ value, onClick, label }, ref) => {
    const parts = value?.split(" ") || [];

    return (
      <button
        type="button"
        onClick={onClick}
        ref={ref}
        className="bg-[#8eacc6] text-center py-5 w-full h-full  cursor-pointer"
      >
        <p className="text-white text-[11px] tracking-[2px] mb-2">
          {label}
        </p>

        <div className="text-[#083b67] font-bold text-5xl leading-none">
          {parts[0]}
        </div>

        <div className="text-white text-sm mt-1">
          {parts[1]}
        </div>
      </button>
    );
  }
);

DateBox.displayName = "DateBox";

export default DateBox;