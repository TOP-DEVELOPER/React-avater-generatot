import React from "react";

import Normal from "./normal";
import Thick from "./thick";
import Mohawk from "./mohawk";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";

export default function (props) {
  const { style, color } = props;
  switch (style) {
    case "normal": return <Normal />;
    case "thick": return <Thick />;
    case "mohawk": return <Mohawk />;
    case "womanLong": return <WomanLong color={color} />;
    case "womanShort": return <WomanShort color={color} />;
  }
}
