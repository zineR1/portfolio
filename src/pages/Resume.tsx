import doc from "../assets/myResume.pdf";
import { Loader } from "../shared";
import { useEffect } from "react";
import { useAppStore } from "../store";

const Resume = () => {
  const { isLoading, setLoading } = useAppStore();

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={"w-[60%] p-[20px] mt-[50px] m-auto"}>
        <iframe
          src={doc}
          title="Resume viewer"
          width="100%"
          height={800}
          className="border rounded-[10px]"
          loading="lazy"
          onLoad={() => setTimeout(() => setLoading(false), 1000)}
        ></iframe>
      </div>
    </>
  );
};

export default Resume;
