import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export const RenderBarChart = ({ bookedDoctorsData }) => {
  const data = bookedDoctorsData;
  // console.log(data);
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  function getIntroOfPage(label) {
    // console.log(label)
    const targetData = data.find((d) => d.id == label);
    // console.log(targetData);
    const { name, registration_number, working_at, speciality } = targetData;

    if (label) {
      return (
        <>
          <h1 className="text-3xl">{name}</h1>
          <h3 className="text-sm">{`(${registration_number})`}</h3>
          <h3 className="text-lg">{`(${speciality})`}</h3>
          <p className="">{working_at}</p>
        </>
      );
    }
  }

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <div className="intro">{getIntroOfPage(label)}</div>
          <p className="label text-2xl">{`Fee : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <BarChart width={1200} height={400} data={data}>
      <XAxis dataKey="id" tick={false} />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="consultation_fee" fill="#8884d8" shape={<TriangleBar />} />
    </BarChart>
  );
};
