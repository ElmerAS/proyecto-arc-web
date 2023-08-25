import axios from "axios";
import { CONTENT_BASE, ARC_ACCESS_TOKEN } from "fusion:environment";

const includedFields = [
  "website_url",
  "headlines.basic",
  "subheadlines.basic",
  "credits.by",
  "display_date",
  "canonical_website",
  "taxonomy.primary_section",
  "content_elements",
].join();

const fetch = async (query) => {
  const website = query["arc-site"];
  if (!query.hasOwnProperty("uri"))
    throw new Error("No id provided in content source");
  try {
    const content = await axios.get(
      `${CONTENT_BASE}/content/v4/stories?website=${website}&website_url=${query.uri}&included_fields=${includedFields}`,
      {
        headers: {
          Authorization: `Bearer ${ARC_ACCESS_TOKEN}`,
        },
      }
    );
    return content.data;
  } catch (error) {
    return { err: true };
  }
};

export default {
  fetch,
  schemaName: "minimal",
  params: { uri: "string" },
};
