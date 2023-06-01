export async function getReviews({ order = "createdAt", offset = 0, limit = 6 }) {
  const query = `order=${order}&offset=${offset}&limit=S{limit}`;
  const response = await fetch(`https://learn.codeit.kr/api/film-reviews?${query}`);

  if (!response.ok) {
    throw new Error("Fail to load");
  }
  const body = await response.json();
  return body;
}
