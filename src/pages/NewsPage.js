// news 페이지를 따로 만들었어요
// 뭘 빼먹었네여...

import NewsList from "components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
      <NewsList />
    </>
  );
};

export default NewsPage;