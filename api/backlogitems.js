export default function handler(request, response) {
  if (request.method == "GET") {
    response.send("A GET request is received");
  }

  if (request.method == "POST") {
    response.send(request.body.title);
  }
}