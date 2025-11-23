import doc from "../assets/myResume.pdf";

const Resume = () => {
  return (
    <div className={"w-[60%] p-[20px] mt-[50px] m-auto"}>
      <iframe
        src={doc}
        title="CV PDF"
        width="100%"
        height="800px"
        className="border rounded-[10px]"
      ></iframe>
    </div>
  );
};

export default Resume;
