const colorMap = {
  yellow: 'bg-yellow text-black',
  white: 'bg-white text-black',
};

const borderMap = {
  none: 'border-0',
  yellow: 'border-2 border-yellow',
  black: 'border-2 border-black',
};

function Button({ label, href, color = 'yellow', border = 'none' }) {
  const classes = `font-roboto font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-30 text-center shadow-[0_4px_0px_rgba(0,0,0,0.15)] ${colorMap[color] ?? colorMap.yellow} ${borderMap[border] ?? borderMap.none}`;

  const isExternal = href?.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      className={classes}
    >
      {label}
    </a>
  );
}


export default Button;
