import { useState } from "react";
import { ICONS } from "@config/icons";

export default function Image({ alt, src, width, height, style, ...props }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const displaySrc = error || !src ? ICONS.placeholders.image : src;

  return (
    <img
      alt={alt}
      src={displaySrc}
      width={width}
      height={height}
      style={{
        display: "block",
        maxWidth: "100%",
        height: "auto",
        opacity: loading && !error ? 0.5 : 1,
        transition: "opacity 200ms ease",
        ...style,
      }}
      onLoad={() => setLoading(false)}
      onError={() => {
        setError(true);
        setLoading(false);
      }}
      {...props}
    />
  );
}
