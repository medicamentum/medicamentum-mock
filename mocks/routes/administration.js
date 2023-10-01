// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// users data
const ADMINISTRATION = [
  {
    id: 1,
    description: "Oral",
    language: "pt"
  },
  {
    id: 2,
    description: "Intravenoso",
    language: "pt"
  },
];

module.exports = [
  {
    id: "get-administration", // id of the route
    url: "/api/filter/administration", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: ADMINISTRATION, // body to send
        },
      },
      {
        id: "error", // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-administration-by-id", // id of the route
    url: "/api/filter/administration/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: ADMINISTRATION[0], // body to send
        },
      },
      {
        id: "real", // id of the variant
        response: (req, res) => {
          const id = req.params.id;
          const administration = ADMINISTRATION.find((administrationData) => administrationData.id === Number(id));
          if (administration) {
            res.status(200);
            res.send(administration);
          } else {
            res.status(404);
            res.send({
              message: "Administration not found",
            });
          }
        },
      },
    ],
  },
];
