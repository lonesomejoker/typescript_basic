import type { PropsWithChildren, ReactNode } from "react";

interface NextCardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

//children comes with PropsWithChildren
const NextCard = ({ title, children, footer }: NextCardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default NextCard;
