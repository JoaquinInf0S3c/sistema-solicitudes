import z from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  departmentName: z.string(),
  role: z.enum(["ADMIN", "JEFE", "DIRECTOR"]),
});

export const RequestSchema = z.object({
  id: z.string(),
  userEmail: z.string().email(),
  contactEmail: z.string().email(),
  requestTypeName: z.string(),
  reasonName: z.string(),
  status: z.enum(["pendiente", "aprobado", "denegado"]),
});

export const ReasonSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const RequestTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const DepartmentSchema = z.object({
  id: z.string(),
  name: z.string(),
  managementName: z.string(),
});

export const PrivilegeSchema = z.object({
  id: z.string(),
  name: z.string(),
  requestId: z.string(),
});

