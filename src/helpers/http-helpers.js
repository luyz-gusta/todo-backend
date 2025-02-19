const successRequest = (res, data) => {
  res.status(200).json({
    message: "Request successful!",
    data: data,
  });
};

const errorNotFound = (res, item) => {
  res.status(404).json({
    message: `No ${item} found.`,
  });
};

const errorRequired = (res, items) => {
  res.status(400).json({
    message: `${items} are required.`,
  });
};

const errorBadRequest = (res) => {
  res.status(400).json({
    message: "All information must be filled in correctly.",
  });
};

const invalidStatus = (res) => {
  res.status(400).json({
    message: "Invalid status. Allowed values are: pendente e concluído",
  });
};

const created = (res, item, data) => {
  res.status(201).json({
    message: `${item} created successfully`,
    data: data,
  });
};

const deleted = (res, item) => {
  res.status(200).json({
    message: `${item} deleted successfully`
  });
};

const updated = (res, item, data) => {
  res.status(200).json({
    message: `${item} updated successfully`,
    data: data
  });
};

const errorInternalServer = (res, error) => {
  res.status(500).json({
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
