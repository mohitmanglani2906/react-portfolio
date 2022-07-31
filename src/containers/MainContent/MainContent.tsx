import { PropsWithChildren, ReactNode } from "react";

const MainContent = (props: PropsWithChildren<ReactNode>) => {
  return (
    <>
      <h1>Main Content</h1>
      {props.children}
    </>
  );
};
export default MainContent;
