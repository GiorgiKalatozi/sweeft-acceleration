import { User } from "@/types";
import { CardContainer } from "./styles";
import { ReactElement } from "react";

export default function UserCard({ ...user }: User): ReactElement {
  console.log(user);
  return (
    <CardContainer>
      <img
        src={`${user.imageUrl}?v=${user.id}`}
        loading="lazy"
        alt={`image-${user.name}`}
      />
      <strong>
        {user.prefix} {user.name} {user.lastName}
      </strong>
      <p>{user.title}</p>
    </CardContainer>
  );
}
