import type { EntityId, EntityState } from '../common';
import type { Dispatch } from 'react';

export interface Author {
  id: EntityId;
  fName: string;
  lName: string;
  photo: string;
}

export interface IComment {
  id: EntityId;
  parentId: EntityId;
  authorId: EntityId;
  replyIds: EntityId[];
  text: string;
  created: string;
}

type AuthorsEntity = EntityState<Author>;
type CommentsEntity = EntityState<IComment>;

export interface ChatState {
  authors: AuthorsEntity;
  comments: CommentsEntity;
  activeCommentId: EntityId;
}

export interface ChatAction {
  type: string;
  payload: string;
}

export type DispatchChatAction = Dispatch<ChatAction>;
