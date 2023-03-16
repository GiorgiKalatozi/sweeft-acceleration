import UserCard from "@/components/UserCard";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { UsersContainer, UsersContent } from "./styles";

export default function UsersPage() {
  const { data, isLoading } = useInfiniteScroll();

  if (isLoading) return <p>Loading...</p>;
  return (
    <UsersContainer>
      <UsersContent>
        {data?.map((user) => (
          <>
            <UserCard {...user} />
          </>
        ))}
      </UsersContent>
    </UsersContainer>
  );
}
