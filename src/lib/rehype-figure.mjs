// Wraps a paragraph that contains only an image in <figure>, and turns the
// image's alt text into a visible <figcaption>.
import { visit } from "unist-util-visit";

export default function rehypeFigure() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "p" || !parent || index === undefined) return;
      const kids = node.children.filter(
        (c) => !(c.type === "text" && c.value.trim() === ""),
      );
      if (kids.length !== 1 || kids[0].tagName !== "img") return;
      const img = kids[0];
      const alt = img.properties?.alt;
      img.properties = { ...img.properties, loading: "lazy", decoding: "async" };
      const children = [img];
      if (alt) {
        children.push({
          type: "element",
          tagName: "figcaption",
          properties: {},
          children: [{ type: "text", value: String(alt) }],
        });
      }
      parent.children[index] = {
        type: "element",
        tagName: "figure",
        properties: {},
        children,
      };
    });
  };
}
