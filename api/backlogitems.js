export default function handler(request, response) {
  response.send(request.method);
}