/**
 * Joins the passed-in CSS classes with a space.
 */
export default function classes(...cssClasses: Array<string>): string {
  return cssClasses.join(" ");
}
