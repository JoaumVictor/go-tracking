import React, { createContext, useState } from "react";

type locationT = {
  id: string;
  latitude: number;
  longitude: number;
  speed: number;
  time: string;
};

interface SessionContextT {
  serviceStatus: boolean;
  setServiceStatus: (value: boolean) => void;
  locationData: any;
  setLocationData: (value: any) => void;
  // faltam detalhes nesse location aqui
}

export type SessionProviderProps = {
  children: React.ReactNode;
};

export const SessionContext = createContext<SessionContextT>(
  {} as SessionContextT
);

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [serviceStatus, setServiceStatus] = useState(false);
  const [locationData, setLocationData] = useState([
    {
      id: "meu item 1",
      latitude: -9.5377063,
      longitude: -35.7754352,
      speed: 0,
      time: "09/25/22",
    },
    {
      id: "item 2",
      latitude: -9.5377063,
      longitude: -35.7754352,
      speed: 0,
      time: "09/25/22",
    },
  ]);

  return (
    <SessionContext.Provider
      value={{
        serviceStatus,
        setServiceStatus,
        locationData,
        setLocationData,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const UserConsumer = SessionContext.Consumer;
