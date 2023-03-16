import useInfiniteScroll from "./hooks/useInfiniteScroll";

function App() {
  const { data, isLoading } = useInfiniteScroll();

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {data?.map((user) => (
        <>
          <h1>{user.name}</h1>
        </>
      ))}
    </div>
  );
}

export default App;
