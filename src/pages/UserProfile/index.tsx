/* eslint-disable @typescript-eslint/no-explicit-any */
import useFetch from "@/hooks/useFetch";
import { BASE_URL } from "@/services";
import { SingleUser, User } from "@/types";
import { Link, useParams } from "react-router-dom";
import { UsersContainer } from "@/pages/Users/styles";
import {
  Friends,
  FriendsList,
  UserBody,
  UserHead,
  UserWrapper,
} from "@/pages/UserProfile/styles";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useUsersStore } from "@/zustand/store";

export default function UserProfilePage() {
  const [friends, setFriends] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useParams();
  const [isTop, setIsTop] = useState(true);

  const query = `${BASE_URL}/user/${userId}/friends/${page}/20`;

  const { data: userData } = useFetch<SingleUser>(`${BASE_URL}/user/${userId}`);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(query)
      .then((response) => {
        if (!isTop) {
          setFriends((prev) => {
            return [...response.data.list, ...prev];
          });
          setIsTop(true);
        }
        if (isTop) {
          setFriends(() => {
            return [...response.data.list];
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, query]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const currentHeight =
        window.innerHeight + document.documentElement.scrollTop;

      if (currentHeight + 1 >= scrollHeight) {
        setPage(page + 1);
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const { usersFriends } = useUsersStore();

  return (
    <UsersContainer>
      <UserWrapper>
        <UserHead>
          <img src={`${userData?.imageUrl}/${userId}`} alt={userData?.name} />
          <fieldset className="left-info">
            <legend>Info</legend>
            <div>
              <strong>
                {userData?.prefix} {userData?.name} {userData?.lastName}
              </strong>
            </div>
            <div>
              <i>{userData?.title}</i>
            </div>
            <br />
            <div>
              <span>Email</span>: {userData?.email}
            </div>
            <div>
              <span>Ip Address</span>: {userData?.ip}
            </div>
            <div>
              <span>Job Descriptor</span>: {userData?.jobDescriptor}
            </div>
            <div>
              <span>Job Area</span>: {userData?.jobArea}
            </div>
            <div>
              <span>Job Type</span>: {userData?.jobType}
            </div>
          </fieldset>
          <fieldset>
            <legend>Address</legend>
            <div>
              <strong>
                {userData?.company?.name} {userData?.company?.suffix}
              </strong>
            </div>
            <div>
              <span>City</span>: {userData?.address?.city}
            </div>
            <div>
              <span>Country</span>: {userData?.address?.country}
            </div>
            <div>
              <span>State</span>: {userData?.address?.state}
            </div>
            <div>
              <span>Street Address</span>: {userData?.address?.streetAddress}
            </div>
            <div>
              <span>ZIP</span>: {userData?.address?.zipCode}
            </div>
          </fieldset>
        </UserHead>
        <UserBody>
          <FriendsList>
            {usersFriends?.map((friends: any, index: number) => (
              <span key={index}>
                <Link to={friends?.id}>
                  {friends?.prefix} {friends?.name}
                  {friends?.lastName}
                </Link>
                {index < usersFriends?.length - 1 &&
                  usersFriends.length > 0 &&
                  " > "}
              </span>
            ))}
          </FriendsList>
          <h2>Friends:</h2>
          <Friends>
            {friends?.map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
          </Friends>
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
        </UserBody>
      </UserWrapper>
    </UsersContainer>
  );
}
