export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  departmentName: string;
};

export type UserField = {
  id: string;
  name: string;
}

export type Department = {
  id: string;
  name: string;
  managementId: string;
};

export type Management = {
  id: string;
  name: string;
};

export type RequestType = {
  id: string;
  name: string;
};

export type Request = {
  id: string;
  userId: string;
  requestTypeId: string;
  reasonId: string;
  email: string;
  status: 'pendiente' | 'aprobado' | 'denegado';
};

export type RequestField = {
  id: string;
  userId: string;
  requestTypeName: string;
  reasonId: string;
  email: string;
  state: 'pendiente' | 'aprobado' | 'denegado';
  userName: string;
  reasonName: string;
};

export type Reason = {
  id: string;
  name: string;
};

export type DepartmentField = {
  id: string;
  name: string;
};

export type RequestTypeField = {
  id: string;
  name: string;
};

export type ReasonField = {
  id: string;
  name: string;
};