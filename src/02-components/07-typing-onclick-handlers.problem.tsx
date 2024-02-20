import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const Parent = () => {
  return (
    <>
      <Button onClick={() => {}} className="my-class">
        Click me
      </Button>
    </>
  );
};
