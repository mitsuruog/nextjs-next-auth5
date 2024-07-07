"use client";

import { signOut, useSession } from "next-auth/react";

const Settings = () => {
  const session = useSession();

  const onClick = () => {
    signOut();
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
