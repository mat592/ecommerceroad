export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      tupe: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true
      }
    }
  ]
};
