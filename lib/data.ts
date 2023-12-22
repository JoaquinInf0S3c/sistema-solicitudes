export async function fetchRequestTypes() {
  const res = await fetch("http://localhost:3000/api/requestType", {
    cache: "no-cache",
  });

  return await res.json();
}

export async function fetchRequestType(id: string) {
  const res = await fetch(`http://localhost:3000/api/requestType/${id}`, {
    cache: "no-cache",
  });

  return await res.json();
}

export async function fetchDepartments() {
  const res = await fetch("http://localhost:3000/api/department", {
    cache: "no-cache",
  });

  return await res.json();
}

export async function fetchDepartment(id: string) {
  const res = await fetch(`http://localhost:3000/api/department/${id}`, {
    cache: "no-cache",
  });

  return await res.json();
}

export async function fetchReasons() {
  const res = await fetch("http://localhost:3000/api/reason", {
    cache: "no-cache",
  });

  return await res.json();
}

export async function fetchRequests() {
  const res = await fetch("http://localhost:3000/api/request", {
    cache: "no-cache",
  });

  return await res.json();
}

export async function fetchUserByEmail(email: string) {
  const res = await fetch(`http://localhost:3000/api/user/byEmail${email}`, {
    cache: "no-cache",
  });

  return await res.json();
}