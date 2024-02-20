import React from "react";

interface Props {
  className: string;
}

export const Button: React.FC<Props> = (props) => {
  return <button className={props.className}>Click me</button>;
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
