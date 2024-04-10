import React from 'react';
import { UserType } from 'src/types';
import { useUser } from 'src/hook/useUser';

export const UserContext = React.createContext<UserType | null>(null);

const UserProvider: React.FC<React.ReactNode> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const { apiData } = useUser('http://localhost:3000/api/user');
  return (
    <UserContext.Provider value={apiData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
