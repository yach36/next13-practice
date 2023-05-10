import { notFound } from 'next/navigation'

type Props = {
  params: {
    id: string
  }
}

type User = {
  id: number
  name: string
  email: string
}

const getUser = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  )
  const user: User = await response.json()
  return user
}

const User = async ({ params: { id } }: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const user = await getUser(id)
  if (!user.id) {
    notFound()
  }
  return (
    <div className="p-2">
      <h1 className="font-bold text-lg">User詳細ページ {id}</h1>
      <div>
        <div>名前： {user.name}</div>
        <div>メールアドレス： {user.email}</div>
        <div>{Math.random()}</div>
      </div>
    </div>
  )
}

export default User

// export async function generateStaticParams() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const users: User[] = await response.json()

//   return users.slice(0, 3).map((user) => ({
//     id: user.id.toString(),
//   }))
// }
