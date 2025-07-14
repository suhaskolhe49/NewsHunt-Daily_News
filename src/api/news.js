export default async function handler(req, res) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&page=1&pageSize=9&apiKey=b917545750294c8cbdbf2772b2e659b2`);
  const data = await response.json();
  res.status(200).json(data);
}
