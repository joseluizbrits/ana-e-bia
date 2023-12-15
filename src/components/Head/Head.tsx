import React from "react";

type HeadProps = {
  title: string;
  description: string;
};

function Head(props: HeadProps) {
  React.useEffect(() => {
    document.title = props.title + " | Ana & Bia Doces";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", props.description || "");
  }, [props]);

  return <></>;
}

export default Head;
