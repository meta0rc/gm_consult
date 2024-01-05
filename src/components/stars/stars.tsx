import { SVGAttributes } from "react";

type Props = {
  rate: number;
};
export const Stars = ({ rate }: Props) => {
  const isShorted = String(rate).length > 1;

  console.log(isShorted);

  console.log(Number(rate.toFixed(0)));
  return (
    <div style={{ display: "flex", gap: 1 }}>
      {[...Array(5)].map((_, current) => (
        <div key={current}>
          {isShorted && Number(rate.toFixed(0)) === current + 1 ? (
            <StarCut />
          ) : (
            <Star fill={rate >= current + 1 ? "#FFB000" : "#999999"} />
          )}
        </div>
      ))}
    </div>
  );
};

const Star = (props: SVGAttributes<SVGElement>) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    id="star"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <path
      id="primary"
      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
    />
  </svg>
);

const StarCut = () => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="17px"
    height="17px"
    viewBox="0 0 503.559 503.559"
    xmlSpace="preserve"
  >
    <path
      style={{
        fill: "#999999",
      }}
      d="M502.659,193.299c-2.4-8-9.6-14.4-18.4-16l-146.4-21.6l-65.6-132c-4-8-12-12.8-20.8-12.8 s-16.8,4.8-20.8,12.8l-65.6,132.8l-145.6,20.8c-8.8,1.6-16,7.2-18.4,16c-2.4,8-0.8,17.6,5.6,24l105.6,103.2l-24.8,145.6 c-1.6,8.8,2.4,17.6,8.8,22.4c7.2,4.8,16.8,5.6,24,1.6l131.2-68.8l130.4,68.8c3.2,1.6,7.2,2.4,10.4,2.4c4.8,0,9.6-1.6,13.6-4 c7.2-4.8,10.4-13.6,8.8-22.4l-24.8-145.6l105.6-103.2C502.659,210.899,505.059,201.299,502.659,193.299z"
    />
    <g />
    <path
      style={{
        fill: "#FFB000",
      }}
      d="M251.459,10.899c-8,0.8-16,5.6-20,12.8l-65.6,132.8l-146.4,20.8c-8.8,1.6-16,7.2-18.4,16 c-2.4,8-0.8,17.6,5.6,24l105.6,103.2l-24.8,145.6c-1.6,8.8,2.4,17.6,8.8,22.4c7.2,4.8,16.8,5.6,24.8,1.6l130.4-68V10.899z"
    />
    <g>
      <path
        style={{
          fill: "#FF9D00",
        }}
        d="M231.459,23.699l-65.6,132.8l-64.8,9.6l150.4,149.6v-304.8 C243.459,11.699,235.459,16.499,231.459,23.699z"
      />
      <polygon
        style={{
          fill: "#FF9D00",
        }}
        points="137.059,481.299 137.059,481.299 251.459,422.099 251.459,367.699  "
      />
    </g>
  </svg>
);
