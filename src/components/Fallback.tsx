export const Fallback = (props: FallbackProps) => {
  const { text } = props;

  return <p className="text-lg">{text}</p>;
};

export interface FallbackProps {
  readonly text: string;
}
