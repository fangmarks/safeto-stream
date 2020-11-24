module.exports = (req, res) => {
  res.status(200).send({
    creator: "https://himbo.cat",
    msg: "hi",
  });
};
