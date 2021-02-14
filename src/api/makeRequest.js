const config = {
  baseURL: "https://api.contentful.com",
  spaceId: "1t4hjzo7y0kb",
  apiKey: "CFPAT-LBtveUvtDi7YjAhsyNzZURthngcrVnIr53eOZjYnxuc",
  enviroment: "master",
};

async function makeRequest({ url, method = "GET", ...rest }) {
  const req = await fetch(
    `${config.baseURL}/spaces/${config.spaceId}/environments/${config.enviroment}/${url}`,
    {
      method,
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
    }
  );
  return await req.json();
}

export { makeRequest };
