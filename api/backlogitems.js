export default function handler(request, response) {
  if (request.method == "GET") {
    response.send("A GET request is received");
  }

  if (request.method == "POST") {
    const backlogItem = {
      id: Date.now(),
      title: request.body.title
    };
    response.json(backlogItem);
  }
}