// utils/slugify.js
export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // spaces -> hyphens
    .replace(/[^\w\-]+/g, "") // remove special chars
    .replace(/\-\-+/g, "-"); // multiple hyphens -> single

export const deslugify = (slug) =>
  slug
    .toString()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize words
