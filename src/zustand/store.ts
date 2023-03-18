/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type UsersFriendsState = {
  usersFriends: any;
  setUsersFriends: (data: any) => void;
};

export const useUsersStore = create<UsersFriendsState>()((set) => ({
  usersFriends: [],

  setUsersFriends: (data) => {
    set((state) => ({
      usersFriends: [...state.usersFriends, data],
    }));
  },
}));
