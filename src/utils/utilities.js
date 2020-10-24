// utils/useDeviceDetect.js
import React from "react";

export  function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
}

export function skipLimitPagination(keyArgs) {
  return {
    keyArgs,
    merge(existing, incoming, { args }) {
      // Dumb version of merge
      // Args is on `items` parent. Prob a better way... but starting point
      return [...(existing || []), ...incoming];
    }
  };
}
