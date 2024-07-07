"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const Settings = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      Settings: {JSON.stringify(user)}
      <div>
        <button onClick={onClick}>Sign Out</button>
      </div>
    </div>
  );
};

export default Settings;
