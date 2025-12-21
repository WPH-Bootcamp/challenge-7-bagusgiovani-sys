type MobileMenuButtonProps = {
  open: boolean;
  onToggle: () => void;
};

export default function MobileMenuToggle({
  open,
  onToggle,
}: MobileMenuButtonProps) {
  return (
    <button
      className="md:hidden z-50"
      onClick={onToggle}
      aria-label="Toggle mobile menu"
    >
      {open ? (
        <>
          {/* CLOSE ICON - LIGHT */}
          <img
            src="/assets/menubar/closebar/x-close-black.svg"
            className="w-6 h-6 block dark:hidden"
            alt="Close menu"
          />

          {/* CLOSE ICON - DARK */}
          <img
            src="/assets/menubar/closebar/x-close-white.svg"
            className="w-6 h-6 hidden dark:block"
            alt="Close menu"
          />
        </>
      ) : (
        <>
          {/* MENU ICON - LIGHT */}
          <img
            src="/assets/menubar/menu-black.svg"
            className="w-6 h-6 block dark:hidden"
            alt="Open menu"
          />

          {/* MENU ICON - DARK */}
          <img
            src="/assets/menubar/menu-white.svg"
            className="w-6 h-6 hidden dark:block"
            alt="Open menu"
          />
        </>
      )}
    </button>
  );
}
