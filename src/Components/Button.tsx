import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  // style: React.CSSProperties;
  className:string;
};

export default function Button(props: ButtonProps) {
  const { children,className } = props;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
