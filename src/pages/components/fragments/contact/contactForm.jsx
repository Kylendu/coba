const ContactForm = ({ onSubmit }) => {
  return (
    <div className="space-y-2">
      <p className="text-gray-500">{`// Send me a message`}</p>
      <div className="text-[#4D5BCE]">
        <span className="text-[#c161e4]">function </span>
        <span className="text-[#5565E8]">sendMessage</span>
        <span className="text-white">() {"{"}</span>
      </div>
      <form onSubmit={onSubmit} className="ml-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="name = 'Your Name'"
          className="w-full bg-[#1E1E1E] border border-[#4D5BCE] p-2 rounded text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="email = 'your@email.com'"
          className="w-full bg-[#1E1E1E] border border-[#4D5BCE] p-2 rounded text-white"
        />
        <textarea
          name="message"
          placeholder="message = 'Your message here...'"
          className="w-full bg-[#1E1E1E] border border-[#4D5BCE] p-2 rounded text-white h-32"
        ></textarea>
        <button type="submit" className="bg-[#4D5BCE] text-white px-6 py-2 rounded hover:bg-[#3A4494]">
          Execute
        </button>
      </form>
      <span className="text-white">{"}"}</span>
    </div>
  );
};

export default ContactForm;