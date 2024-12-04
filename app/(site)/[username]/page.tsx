"use client";
import Header from "@/components/Header";
import { UserAvatarSkeleton } from "@/components/skeleton";
import UserDetailed from "@/components/UserDetailed";
import UserTracks from "@/components/UserTracks";
import { useCurrentUser } from "@/hooks/auth";
import { useGetUserProfile } from "@/hooks/user";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { username } = useParams();
  console.log("username", username);
  const { data, isLoading: isFetchingCurrentUser } = useCurrentUser()

  const validUsername = typeof username === "string" ? username : "";
  const { data: user, isLoading: isFetchingUserProfile } = useGetUserProfile(validUsername);

  if (isFetchingUserProfile || isFetchingCurrentUser) {
    return <UserAvatarSkeleton />
  }

  return (
    <div className="text-neutral-400 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Header>
        {/* User Profile Section */}
        <UserDetailed user={user} />
      </Header>

      {/* Songs Section */}
      <UserTracks username={validUsername} />
    </div>
  );
};

export default Page;
