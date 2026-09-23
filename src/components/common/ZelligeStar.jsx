// Eight-point star (khatam) from Fez zellige: two squares, one rotated 45°.

// Corner points of a square of circumradius r, rotated by `offset` degrees.
const squarePoints = (c, r, offset) =>
  [0, 90, 180, 270]
    .map((a) => {
      const rad = ((a + offset) * Math.PI) / 180;
      return `${c + r * Math.cos(rad)},${c + r * Math.sin(rad)}`;
    })
    .join(" ");

// Outline of the union of both squares: 16 points alternating outer/inner.
export const starPoints = (c, r) => {
  const inner = (r * Math.cos(Math.PI / 4)) / Math.cos(Math.PI / 8);
  return Array.from({ length: 16 }, (_, i) => {
    const rad = ((i * 22.5 - 90) * Math.PI) / 180;
    const d = i % 2 === 0 ? r : inner;
    return `${c + d * Math.cos(rad)},${c + d * Math.sin(rad)}`;
  }).join(" ");
};

// Small mark for the nav and the chat button.
export const StarMark = ({ className = "", withDot = true }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <polygon points={squarePoints(12, 10.5, 45)} fill="none" stroke="currentColor" strokeWidth="1.6" />
    <polygon points={squarePoints(12, 10.5, 0)} fill="none" stroke="currentColor" strokeWidth="1.6" />
    {withDot && <circle cx="12" cy="12" r="2.4" className="fill-brass" />}
  </svg>
);

// Hero portrait: photo clipped to the star, framed by the two interlaced squares.
export const StarPortrait = ({ src, alt, className = "" }) => (
  <svg viewBox="0 0 400 400" className={className} role="img" aria-label={alt}>
    <defs>
      <clipPath id="star-clip">
        <polygon points={starPoints(200, 172)} />
      </clipPath>
    </defs>
    <polygon
      points={squarePoints(200, 194, 45)}
      pathLength="1"
      className="star-draw fill-none stroke-cobalt"
      strokeWidth="2"
    />
    <polygon
      points={squarePoints(200, 194, 0)}
      pathLength="1"
      className="star-draw star-draw-late fill-none stroke-cobalt"
      strokeWidth="2"
    />
    <g className="star-fade">
      <polygon points={starPoints(200, 172)} className="fill-cobalt-tint" />
      <image
        href={src}
        x="28"
        y="20"
        width="344"
        height="400"
        preserveAspectRatio="xMidYMin slice"
        clipPath="url(#star-clip)"
      />
      <polygon points={starPoints(200, 172)} className="fill-none stroke-brass" strokeWidth="1.5" />
    </g>
  </svg>
);
