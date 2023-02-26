import { UserDocument } from './user';
import { Chat } from './chat';
import type { Content, ContentType } from './content';
import { Document } from 'mongoose';

export const postmeContents = [
  'animation',
  'audio',
  'photo',
  'links',
  'video',
  'videonote',
  'voicenote',
  'full',
] as const;

export type PostmeContent = (typeof postmeContents)[number];

export type PostmePermissions = `postme.${PostmeContent}`;

export interface Postme {
  chat: Chat;
  status: 0 | 1;
  password: string;
  protected: boolean;
  createdDate: Date;
  createdByUser: UserDocument;
  lastUpdateDate: Date;
  subscribers: UserDocument[];
  content: Record<ContentType, Content[]>;
}

export interface PostmeDocument extends Postme, Document {}
