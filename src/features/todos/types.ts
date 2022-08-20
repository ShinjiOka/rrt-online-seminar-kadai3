// export type TodoId = String;
// export type DataTime = String;

// const TODO_STATUS = [
//   'waiting',
//   'working',
//   'pending',
//   'discontinued',
//   'completed',
// ];

// export type TodoStatus = typeof TODO_STATUS[number]

// export type TodoInput = {
//   id?: TodoId,
//   title: String,
//   body: String,
//   status?: TodoStatus,
//   createdAt?: DataTime,
//   updatedAt?: DataTime,
//   deletedAt?: DataTime,
// }

// export type Todo = {
//   id: TodoId,
//   title: String,
//   body: String,
//   status: TodoStatus,
//   createdAt: DataTime,
//   updatedAt?: DataTime,
//   deletedAt?: DataTime,
// }

export type TodoId = string;
export type DateTime = String;
const TODO_STATUSES = [
  'waiting',
  'working',
  'pending',
  'discontinued',
  'completed',
];

export type TodoStatus = typeof TODO_STATUSES[number];

export type TodoInput = {
  id?: TodoId;
  title: string;
  body: string;
  status?: TodoStatus;
  createdAt?: DateTime;
  updatedAt?: DateTime;
  deletedAt?: DateTime;
};

export type Todo = {
  id: TodoId;
  title: string;
  body: string;
  status: TodoStatus;
  createdAt: DateTime;
  updatedAt?: DateTime;
  deletedAt?: DateTime;
};