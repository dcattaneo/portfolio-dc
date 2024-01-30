import { useLayoutEffect } from "react";

export const useDisableScroll = ({ nav }) => {
  useLayoutEffect(() => {
    document.body.style.overflowY = nav ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [nav]);
};
