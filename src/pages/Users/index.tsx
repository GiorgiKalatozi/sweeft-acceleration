import UserCard from "@/components/UserCard";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { UsersContainer, UsersContent } from "./styles";
import { ThreeDots } from "react-loader-spinner";

export default function UsersPage() {
  const { data: usersData, isLoading } = useInfiniteScroll();

  return (
    <UsersContainer>
      <UsersContent>
        {usersData?.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </UsersContent>
      {isLoading && (
        <div style={{ textAlign: "center" }}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="center"
            visible={true}
          />
        </div>
      )}
    </UsersContainer>
  );
}
