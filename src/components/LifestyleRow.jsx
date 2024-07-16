const LifestyleRow = ({ num, title, disc, img, id }) => {
  return (
    <div key={id} className=" flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row gap-10 pb-16">
      <div className="lifestyle-col flex-1">
        <div className="holder w-[60%]">
          <h1 className="font-bold text-2xl border-b border-gray-600 pb-6">{num}.</h1>
          <h4 className=" font-bold text-white pt-6">{title}</h4>
          <p className=" text-gray-500">{disc}</p>
        </div>
      </div>
      <div className="image  flex-1">
        <img className="rounded-xl" src={img} alt={img} />
      </div>
    </div>
  );
};

export default LifestyleRow;
