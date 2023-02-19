import { Document } from 'mongoose';
import type { Postme, PostmePermissions } from './postme';

type UserPermissions = PostmePermissions;

export interface User {
  firstName: string;
  userName: string;
  userId: number;
  isBot: boolean;
  lang: string;
  gmt: number;
  permissions: UserPermissions[];
  selectedPostme?: Postme;
}

export interface UserDocument extends User, Document {}
