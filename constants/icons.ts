import {
  faPencilRuler,
  faMobileAlt,
  faUserCheck,
  faBrain,
  faDatabase,
  faThermometerHalf,
  faHeartbeat,
  faServer,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export type TagIcons = {
  [key: string]: IconDefinition;
};

export const tagIcons: TagIcons = {
  Design: faPencilRuler,
  "App Development": faMobileAlt,
  UX: faUserCheck,
  AI: faBrain,
  CMS: faDatabase,
  Productivity: faThermometerHalf,
  IoT: faThermometerHalf,
  Climate: faThermometerHalf,
  Health: faHeartbeat,
  "Back End": faServer,
};
