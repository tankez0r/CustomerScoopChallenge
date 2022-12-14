export function fetcher(...args: [RequestInfo | URL, RequestInit | undefined]) {
  return fetch(...args).then((res) => res.json());
}
