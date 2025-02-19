const successRequest = (res, data) => {
  res.status(200).json({
    status: 200,
    message: "Request successful!",
    data: data,
  });
};

const errorNotFound = (res, item) => {
  res.status(404).json({
    status: 404,
    message: `No ${item} found.`,
  });
};

const errorRequired = (res, items) => {
  res.status(400).json({
    status: 400,
    message: `${items} are required.`,
  });
};

const errorBadRequest = (res) => {
  res.status(400).json({
    status: 400,
    message: "All information must be filled in correctly.",
  });
};

const invalidStatus = (res) => {
  res.status(400).json({
    status: 400,
    message: "Invalid status. Allowed values are: pendente e concluído",
  });
};

const created = (res, item, data) => {
  res.status(201).json({
    status: 201,
    message: `${item} created successfully`,
    data: data,
  });
};

const deleted = (res, item) => {
  res.status(200).json({
    status: 200,
    message: `${item} deleted successfully`
  });
};

const updated = (res, item, data) => {
  res.status(200).json({
    status: 200,
    message: `${item} updated successfully`,
    data: data
  });
};

const errorInternalServer = (res, error) => {
  res.status(500).json({
    status: 500,
    message: 'A server error occurred. Please try again later.',
    error
  });
};


module.exports = {
  successRequest,
  created,
  updated,
  deleted,
  errorBadRequest,
  errorInternalServer,
  errorNotFound,
  errorRequired,
  invalidStatus,
};
