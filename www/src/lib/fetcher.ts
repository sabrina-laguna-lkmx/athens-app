// CLIENT COMPONENTS ONLY!!
// In order to use a default REST JSON response from SWR we need to make add a fetcher
// that handles the data and errors from a single function and use it

// for every api call inside the client components
export class ApiError extends Error {
  status: number | undefined;
  info: string | undefined;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON | undefined> {
  if (!input) {
    return undefined;
  }

  const res = await fetch(input, init);

  if (!res.ok) {
    const error = new ApiError("An error occurred while fetching the data.");
    error.info = res.statusText;
    error.status = res.status;

    console.log(error);

    throw error;
  }

  return res.json();
}
