import UsersList from "./UsersList"
const Test = () => {
  return (
    <>
      <h1 className="text-xl font-bold">Testページ</h1>
      {/* @ts-expect-error Server Component */}
      <UsersList />
    </>
  )
}

export default Test
