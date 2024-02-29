export const Fallback = (props: FallbackProps) => {
  const { className, text } = props;

  return <p className={`text-lg ${className}`}>{text}</p>;
};

export interface FallbackProps {
  readonly className?: string;
  readonly text: string;
}
