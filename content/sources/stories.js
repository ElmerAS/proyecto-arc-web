import axios from "axios";
import { CONTENT_BASE, ARC_ACCESS_TOKEN } from "fusion:environment";

const includedFields = [
  "website_url",
  "canonical_url",
  "headlines.basic",
  "subheadlines.basic",
  "description",
  "credits.by",
  "display_date",
  "canonical_website",
  "taxonomy.primary_section",
  "promo_items",
  "_id",
].join();

const fetch = async (query) => {
  const website = query["arc-site"];
  if (!query.hasOwnProperty("idSection"))
    throw new Error("No id provided in content source");
  try {
    const content = await axios.get(
      `${CONTENT_BASE}/content/v4/search/published?website=${website}&q=type:story+AND+taxonomy.primary_section._id:"${query.idSection}"&sort=display_date:desc&size=10&_sourceInclude=${includedFields}`,
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
  params: { idSection: "string" },
};
