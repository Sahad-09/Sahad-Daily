import { allDocs } from "contentlayer/generated";
import Paginate from "../components/Paginate";

const page = () => {
  return (
    <>
      <Paginate data={allDocs} />
    </>
  );
};

export default page;
