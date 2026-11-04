import type { PropsWithChildren, ReactNode } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

//since propsWithChildren is used, the children prop is automatically included in the CardProps interface. This means that when you use the Card component, you can pass any valid React elements as children, and they will be rendered inside the Card component.

export const Card = ({ title, footer, children }: CardProps) => {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5">
      <h2 className="mb-4 text-lg font-semibold text-stone-800">{title}</h2>
      <div className="mb-4">{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};
