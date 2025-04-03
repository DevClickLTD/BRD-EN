import { fetchAPI, language } from "./api";

export const getContactInfo = async () => {
  const data = await fetchAPI(`contacts?_fields=acf&lang=${language}`);
  const contactInfo = data && data.length > 0 ? data[0].acf : null;
  return contactInfo;
};
