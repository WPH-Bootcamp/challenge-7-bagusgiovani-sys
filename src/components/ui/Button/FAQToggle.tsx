type FaqIconProps = {
  open: boolean;
};

export function FaqToggle({ open }: FaqIconProps) {
  return (
    <>
      {/* Dark mode */}
      <img
        src={open ? "/assets/IconPlusMinus/minus-icon-white.svg" : "/assets/IconPlusMinus/plus-icon-white.svg"}
        className="hidden dark:block w-6 h-6"
        alt=""
      />

      {/* Light mode */}
      <img
        src={
          open ? "/assets/IconPlusMinus/minus-icon-black.svg" : "/assets/IconPlusMinus/plus-icon-black.svg"
        }
        className="block dark:hidden w-6 h-6"
        alt=""
      />
    </>
  );
}