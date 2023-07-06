const BASE_URL = "https://learn.codeit.kr/api";

export async function getReviews({ order = "createdAt", offset = 0, limit = 6 }) {
  const query = `order=${order}&offset=${offset}&limit=S{limit}`;
  const response = await fetch(`${BASE_URL}/film-reviews?${query}`);

  if (!response.ok) {
    throw new Error("Fail to load");
  }
  const body = await response.json();
  return body;
}

export async function createReview(formData) {
  const response = await fetch(`${BASE_URL}/film-reviews`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Fail to Add Review");
  }
  const body = await response.json();
  return body;
}

export async function updateReview(id, formData) {
  const response = await fetch(`${BASE_URL}/film-reviews/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Fail to Edit Review");
  }
  const body = await response.json();
  return body;
}

export async function deleteReview(id) {
  const response = await fetch(`${BASE_URL}/film-reviews/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Fail to Delete Review");
  }
  const body = await response.json();
  return body;
}
