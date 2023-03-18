import { User } from "@/types";
import { Card, CardContainer, UserBold } from "@/components/UserCard/styles";
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";
import { useUsersStore } from "@/zustand/store";

export default function UserCard({ ...user }: User): ReactElement {
  const { prefix, name, lastName, id } = user;

  const navigate = useNavigate();
  const { setUsersFriends } = useUsersStore();

  const handleCardClick = () => {
    navigate(`/user/${id}`, { replace: false });
    setUsersFriends({ prefix, name, lastName, id });
    window.scrollTo({ top: 0, left: 0 });
    // window.location.reload();
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <Card>
        <img
          src={`${user.imageUrl}/${user.id}`}
          loading="lazy"
          alt={`image-${user.name}`}
        />
        <UserBold>
          <strong>
            {user.prefix} {user.name} {user.lastName}
          </strong>
        </UserBold>
        <UserBold>{user.title}</UserBold>
      </Card>
    </CardContainer>
  );
}
