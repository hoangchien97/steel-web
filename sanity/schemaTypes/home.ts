import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      // validation: Rule => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [{ name: "url", type: "url", title: "URL" }],
        },
      ],
      options: {
        layout: "grid",
      },
      validation: (Rule) =>
        Rule.min(3).error("Please add at least three images."),
    },
  ],
});
