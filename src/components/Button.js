import React from "react";

export default function Button({
  type = "",
  href = "",
  labelName = "",
  iconSvg = "",
  className = "",
}) {
  if (type === "link") {
    return (
      <a href="#" className="opacity-75 hover:opacity-100">
        Projects {/* Icon */}
      </a>
    );
  } else {
    switch (className) {
      case "primary":
        return;
        break;
      default:
        break;
    }
  }
}
