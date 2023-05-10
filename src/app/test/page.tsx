import UsersList from "./UsersList"
import PostsList from "./PostsList"
import Counter from "./Counter"
import { Suspense } from "react"

const Test = () => {
  return (
    <>
      <h1 className="text-xl font-bold">Testページ</h1>
      <Counter />
      <Suspense fallback={<p className="mt-4">ユーザデータ Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <UsersList />
      </Suspense>
      <Suspense fallback={<p className="mt-4">記事データ Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <PostsList />
      </Suspense>
    </>
  )
}

export default Test
