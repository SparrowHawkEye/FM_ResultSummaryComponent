const Summary = (props) => {
  // console.log(props.data)
  const { category, score, icon, color } = props.data;
  console.log(category, score, icon, color);
  return (
    <div
      className={`flex justify-between ${color} bg-opacity-10 p-4 my-3 md:mt-0 md:mb-3 border rounded-xl`}
    >
      <div className="flex gap-3">
        <img src={icon} alt="" />
        <p>{category}</p>
      </div>
      <p className="text-dark-gray-blue font-semibold">
        {score} <span className="text-dark-gray-blue/60">/ 100</span>
      </p>
    </div>
  );
};

export default Summary;
