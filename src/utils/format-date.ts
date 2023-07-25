export function formatDate(inputDateString: string): string {
  const date = new Date(inputDateString);

  const outputDateString = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return outputDateString;
}
