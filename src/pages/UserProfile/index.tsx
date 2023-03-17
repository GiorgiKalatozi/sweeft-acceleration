import useFetch from "@/hooks/useFetch";
import { BASE_URL } from "@/services";
import { SingleUser } from "@/types";
import { useParams } from "react-router-dom";

export default function UserProfilePage() {
  const { userId } = useParams();
  const { data: userData } = useFetch<SingleUser>(`${BASE_URL}/user/${userId}`);

  console.log(userData, "ass");

  // console.log(userData?.data);

  return (
    <div>
      {userId}
      {userData?.email}
      {userData?.name}
    </div>
  );
}
