import UserCard from "@/components/UserCard";
import { UsersContainer, UsersContent } from "./styles";
import { ThreeDots } from "react-loader-spinner";
import { BASE_URL } from "@/services";
import { useState } from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

export default function UsersPage() {
  // const { data: usersData, isLoading } = useInfiniteScroll();
  const [page, setPage] = useState(1);

  const query = `${BASE_URL}/user/${page}/20`;

  const { data: usersData, isLoading } = useInfiniteScroll({
    query,
    page,
    setPage,
  });

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
