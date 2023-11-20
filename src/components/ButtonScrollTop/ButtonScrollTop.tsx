import React from "react";
import { ButtonScrollTopStyled } from "./ButtonScrollTopStyled";

function ButtonScrollTop() {
  const [active, setActive] = React.useState(false);

  function addButton() {
    const scrollTopTwentyPercent =
      document.documentElement.scrollTop >
      document.documentElement.scrollHeight * 0.2;

    if (scrollTopTwentyPercent) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", addButton);

    return () => window.removeEventListener("scroll", addButton);
  }, []);

  function handleClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <ButtonScrollTopStyled
      onClick={handleClick}
      className={active ? "active" : ""}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_200_59)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0844 10.55L10.5494 14.0875C10.3994 14.2375 10.1944 14.2813 10 14.2438C9.80563 14.2813 9.60063 14.2375 9.45063 14.0875L5.91562 10.55C5.67125 10.3063 5.67125 9.91248 5.91562 9.66248C6.15937 9.41873 6.555 9.41873 6.79937 9.66248L9.375 12.2437V5.625C9.375 5.28125 9.655 5 10 5C10.3456 5 10.625 5.28125 10.625 5.625V12.2437L13.2006 9.66248C13.445 9.41873 13.8413 9.41873 14.0844 9.66248C14.3288 9.91248 14.3288 10.3063 14.0844 10.55ZM10 0C4.47688 0 0 4.475 0 10C0 15.525 4.47688 20 10 20C15.5231 20 20 15.525 20 10C20 4.475 15.5231 0 10 0Z"
            fill="var(--p7)"
          />
        </g>
        <defs>
          <clipPath id="clip0_200_59">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </ButtonScrollTopStyled>
  );
}

export default ButtonScrollTop;
