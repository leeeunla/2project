export function login() {
  return fetch(`http://localhost:8080/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((response) => response.json());
}
export function getAllmain() {
  return <></>;
}
