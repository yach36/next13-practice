import { Article } from "../../../generated/graphql";

type Props = {
  article: Article;
};

export const ArticleContent = ({ article }: Props) => {
  const { title, content, author, abstract } = article;
  return (
    <div>
      <p>title: {title}</p>
      <p>content: {content}</p>
      <p>author: {author}</p>
      <p>abstract: {abstract}</p>
    </div>
  );
};
