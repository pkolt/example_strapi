module.exports = {
  //required
  input: [
    "api",
    "./node_modules/strapi-plugin-users-permissions/models/",
    "./node_modules/strapi-plugin-upload/models/",
  ],
  inputGroup: "./components/",
  output: "./types/",

  // optional
  enum: true,
  nested: false,
  interfaceName: (name) => `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`,
  addField: (interfaceName) => [
    { name: "published_at", type: "string" },
    { name: "created_by", type: "string" },
    { name: "updated_by", type: "string" },
  ],
};
