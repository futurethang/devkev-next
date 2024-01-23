import { client } from "./sanity-client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const fallback =
  "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

function urlFor(source: any) {
  if (!source) return builder.image(fallback);
  return builder.image(source);
}

export default urlFor;
