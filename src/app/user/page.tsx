type User = {
  id: number
  name: string
  email: string
}

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await response.json()
  return users
}

const Users = async () => {
  const users = await getUsers()
  return (
    <main className="p-2">
    <h1 className="text-lg font-bold">Userページ</h1>
    <ul>
      {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  </main>
  )
}

export default Users
