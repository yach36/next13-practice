import { ArticleContent } from "../../../../components/templates/ArticleContent";
import { GetArticleDocument, Article } from "../../../../generated/graphql";
import client from "../../../../lib/graphqlClient";

type Props = {
  params: {
    id: string
  }
}

const getArticle = async (id: string) => {
  try {
    const { data } = (
      await client.query({
        query: GetArticleDocument,
        variables: { id: Number(id) },
      })
    )
    return data.article as Article
  } catch(e) {
    console.log(e)
    return {} as Article
  }
}

const Article = async ({ params: { id } }: Props) => {
  const article: Article = await getArticle(id)
  return <ArticleContent article={article} />
}

export default Article
