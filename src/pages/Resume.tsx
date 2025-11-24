import doc from "../assets/myResume.pdf";
import { useEffect } from "react";
import { useAppStore } from "../store";
import Loader from "../shared/Loader/Loader";

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
          title="CV PDF"
          width="100%"
          height="800px"
          className="border rounded-[10px]"
          onLoad={() => setTimeout(() => setLoading(false), 1000)}
        ></iframe>
      </div>
    </>
  );
};

export default Resume;
