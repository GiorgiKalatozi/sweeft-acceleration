import UserCard from "@/components/UserCard";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

export default function UsersPage() {
  const { data, isLoading } = useInfiniteScroll();

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {data?.map((user) => (
        <>
          <UserCard {...user} />
        </>
      ))}
    </div>
  );
}
