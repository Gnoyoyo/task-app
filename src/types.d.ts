export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type List = {
  __typename?: 'List';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createList?: Maybe<List>;
  createTask?: Maybe<Task>;
  updateTask?: Maybe<Task>;
};


export type MutationCreateListArgs = {
  title?: Maybe<Scalars['String']>;
};


export type MutationCreateTaskArgs = {
  title?: Maybe<Scalars['String']>;
  listId?: Maybe<Scalars['Int']>;
};


export type MutationUpdateTaskArgs = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  lists?: Maybe<Array<Maybe<List>>>;
};

export type Task = {
  __typename?: 'Task';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};
