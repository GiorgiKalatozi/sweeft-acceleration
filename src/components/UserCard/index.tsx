import { User } from "@/types";
import { Card, CardContainer, UserBold } from "./styles";
import { ReactElement } from "react";

export default function UserCard({ ...user }: User): ReactElement {
  console.log(user);
  return (
    <CardContainer>
      <Card>
        <img
          src={`${user.imageUrl}?v=${user.id}`}
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
