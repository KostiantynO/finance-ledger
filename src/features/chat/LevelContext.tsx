import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

const ChatLevelContext = createContext(0);
export const useLevelContext = () => useContext(ChatLevelContext);

export const LevelContextProvider = ({ children }: { children: ReactNode }) => {
  const level = useLevelContext();

  return (
    <ChatLevelContext.Provider value={level + 1}>
      {children}
    </ChatLevelContext.Provider>
  );
};
