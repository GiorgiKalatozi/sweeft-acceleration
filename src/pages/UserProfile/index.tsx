import useFetch from "@/hooks/useFetch";
import { BASE_URL } from "@/services";
import { SingleUser } from "@/types";
import { useParams } from "react-router-dom";
import { UsersContainer } from "@/pages/Users/styles";
import {
  Space,
  UserBody,
  UserHead,
  UserWrapper,
} from "@/pages/UserProfile/styles";

export default function UserProfilePage() {
  const { userId } = useParams();
  const { data: userData } = useFetch<SingleUser>(`${BASE_URL}/user/${userId}`);

  console.log(userData, "ass");

  return (
    <UsersContainer>
      <UserWrapper>
        <UserHead>
          <img src={userData?.imageUrl} alt={userData?.name} />
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
          <Space />
          <h2>Friends:</h2>
        </UserBody>
      </UserWrapper>
    </UsersContainer>
  );
}
