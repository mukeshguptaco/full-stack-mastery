export default function handler(request, response) {
  if (request.method === "GET") {
  const backlogItems = [
    {
      id: 1,
      title: "Login Flow"
    },
    {
      id: 2,
      title: "Dashboard"
    },
    {
      id: 3,
      title: "Search"
    }
  ];

  response.json(backlogItems);
}

  if (request.method == "POST") {
    const backlogItem = {
      id: Date.now(),
      title: request.body.title
    };
    response.status(201).json(backlogItem);
  }
}