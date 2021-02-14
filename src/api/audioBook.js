import { makeRequest } from "./makeRequest";

export default {
  searchAudioBooks: (query) =>
    makeRequest({
      url: `/entries?query=${query}&select=fields,sys.id,sys.version&locale=es-MX&content_type=audiocontent-v9`,
    }),
};
