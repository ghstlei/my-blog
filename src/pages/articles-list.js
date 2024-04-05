import articles from "./article-content";
import ArticleList from "../components/articles-list-component";

const ArticlesList = () => {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
};

export default ArticlesList;
