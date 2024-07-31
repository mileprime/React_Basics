import React from "react";

function usePrint(x) {
  let print = x;
  let setPrint = () => {
    print = "active";
  };

  return [print, setPrint];
}

export default usePrint;
