import React from "react";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export default function TextArea({
  label,
  id,
  className,
  ...props
}: TextAreaProps) {
  if (!id) {
    throw new Error("TextArea requires an id prop");
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-bold text-sm leading-7 text-neutral-25"
      >
        {label}
      </label>

      <textarea
        id={id}
        className={`px-4 py-2 border border-(--neutral-800) rounded-xl h-33.5 placeholder-(--neutral-500) placeholder:text-sm placeholder:leading-7 md:placeholder:text-base md:placeholder:leading-7 hover:border hover:border-(--primary-200) focus:border-[3px] focus:border-(--primary-200) focus:outline-none ${
          className ?? ""
        }`}
        {...props}
      />
    </div>
  );
}