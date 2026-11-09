import { useFetch } from "../hooks/useFetch";


interface User  {
  id: number;
  name: string;
  email: string;
};
const DummyUsers = () => {
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className=" font-bold">Users</h2>
      {data?.map((user) => (
        <div key={user.id} className=" font-mono text-[15px] border-b py-3 border-gray-100 w-fit">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default DummyUsers;