"use client";

import { logout } from "@/actions/logout";
import { useSession } from "next-auth/react";

const Settings = () => {
  const session = useSession();

  const onClick = () => {
    logout();
  };

  return (
    <div>
      Settings: {JSON.stringify(session)}
      <div>
        <button onClick={onClick}>Sign Out</button>
      </div>
    </div>
  );
};

export default Settings;
