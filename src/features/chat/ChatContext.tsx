import type { ReactNode } from 'react';
import type {
  Author,
  ChatAction,
  ChatState,
  DispatchChatAction,
  EntityId,
  IComment,
} from 'types';

import { createContext, useContext, useReducer } from 'react';
import { makeEntityFromKey } from 'common/utils';

const authorsArr: Author[] = [
  { id: 'author001', fName: 'Elliot', lName: 'Fu', photo: '/vite.svg' },
  { id: 'author002', fName: 'Matt', lName: '', photo: '/vite.svg' },
  { id: 'author003', fName: 'Jenny', lName: 'Hes', photo: '/vite.svg' },
  { id: 'author004', fName: 'Joe', lName: 'Henderson', photo: '/vite.svg' },
];

const commentsArr: IComment[] = [
  {
    parentId: '',
    id: 'comment001',
    text: 'I got a dev job!',
    replyIds: ['002', '003'],
    authorId: 'author001',
    created: '2023-02-10-00:30', // 'Yesterday at 12:30AM'
  },
  {
    parentId: 'comment001',
    id: 'reply002',
    text: "That's awesome!",
    replyIds: [],
    authorId: 'author002',
    created: '2023-02-11-15:42', // Today at 5:42PM
  },
  {
    parentId: 'comment001',
    id: 'reply003',
    text: 'Congrats Elliot!',
    replyIds: [],
    authorId: 'author003',
    created: '2023-02-11-16:55', // Just now
  },
  {
    parentId: '',
    id: 'comment004',
    text: 'What is everyone studying?',
    replyIds: [],
    authorId: 'author004',
    created: '2023-02-06-14:30', // 5 days ago
  },
];

const authorsEntity = makeEntityFromKey(authorsArr, 'id');
const commentsEntity = makeEntityFromKey(commentsArr, 'id');

const chatReducer = (state: ChatState, { type }: ChatAction): ChatState => {
  switch (type) {
    case '':
      return { ...state };

    default:
      return state;
  }
};

const chatInitState: ChatState = {
  authors: authorsEntity,
  comments: commentsEntity,
  activeCommentId: '',
};

const ChatContext = createContext<ChatState>(chatInitState);
const ChatContextDispatch = createContext<DispatchChatAction>(() => {});

export const useChat = () => useContext<ChatState>(ChatContext);
export const useChatDispatch = () =>
  useContext<DispatchChatAction>(ChatContextDispatch);

export const ChatCtx = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(chatReducer, chatInitState);

  return (
    <ChatContext.Provider value={state}>
      <ChatContextDispatch.Provider value={dispatch}>
        {children}
      </ChatContextDispatch.Provider>
    </ChatContext.Provider>
  );
};

export const useSelectCommentsIds = () => useChat().comments.ids;

export const useSelectComment = (commentId: EntityId): IComment =>
  useChat().comments.entities[commentId];

export const useSelectAuthor = (authorId: EntityId): Author =>
  useChat().authors.entities[authorId];
