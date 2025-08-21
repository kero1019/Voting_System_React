import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
};

export default function Button(props: ButtonProps) {
  const { children, style } = props;
  return (
    <button className="orange-button" style={style}>
      {children}
    </button>
  );
}
