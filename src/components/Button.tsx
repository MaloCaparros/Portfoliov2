type ButtonColor = 'yellow' | 'white';
type ButtonBorder = 'none' | 'yellow' | 'black';

interface ButtonProps {
  label: string;
  href: string;
  color?: ButtonColor;
  border?: ButtonBorder;
}

const colorMap: Record<ButtonColor, string> = {
  yellow: 'bg-yellow text-black',
  white: 'bg-white text-black',
};

const borderMap: Record<ButtonBorder, string> = {
  none: 'border-0',
  yellow: 'border-2 border-yellow',
  black: 'border-2 border-black',
};

function Button({ label, href, color = 'yellow', border = 'none' }: ButtonProps) {
  const classes = `font-roboto font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity min-w-30 text-center ${colorMap[color]} ${borderMap[border]}`;
  const isExternal = href?.startsWith('http');

  return (
    <a href={href} target={isExternal ? '_blank' : undefined} className={classes}>
      {label}
    </a>
  );
}

export default Button;
