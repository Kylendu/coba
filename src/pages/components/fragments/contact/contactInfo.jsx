const ContactInfo = ({ formData = {} }) => {
  return (
    <div className="space-y-2">
      <p className="text-gray-500">{`// Contact information`}</p>
      <div className="text-[#4D5BCE]">
        <span className="text-[#c161e4]">const </span>
        <span className="text-[#5565E8]">contactDetails</span>
        <span className="text-white"> = </span>
        <span className="text-[#FFA07A]">{"{"}</span>
      </div>
      <div className="ml-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="text-[#4D5BCE]">
            <span className="text-[#5565E8]">{key}</span>
            <span className="text-white">: </span>
            <span className="text-[#FFA07A]">{`'${value}'`}</span>
            <span className="text-white">,</span>
          </div>
        ))}
      </div>
      <span className="text-[#FFA07A]">{"}"}</span>
    </div>
  );
};

export default ContactInfo;