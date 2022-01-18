const { Reports, Users } = require("../models");

const createReport = async (req, res) => {
  const { dataReport } = req.body;
  const { userUUID } = req.params;
  try {
    const dataReportString = JSON.stringify(dataReport);

    const user = await Users.findOne({ where: { uuid: userUUID } });
    const report = await Reports.create({
      dataReport: dataReportString,
      userId: user.id,
    });
    return res.status(200).json({ status: "success", report });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "error", err });
  }
};

const getReportsByUser = async (req, res) => {
  const { userUUID } = req.params;
  try {
    const reports = await Reports.findAll({
      attributes: ["dataReport", "createdAt"],
      include: {
        association: "user",
        where: { uuid: userUUID },
        attributes: ["uuid", "name"],
      },
    });

    for (const report of reports) {
      report.dataReport = JSON.parse(report.dataReport);
    }
    return res.status(200).json({ status: "success", reports });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "error", err });
  }
};

const getReportByUUID = async (req, res) => {
  const { uuid } = req.params;
  try {
    const report = await Reports.findOne({
      where: { uuid },
      attributes: ["dataReport", "createdAt"],
    });

    report.dataReport = JSON.parse(report.dataReport);

    return res.status(200).json({ status: "success", report });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "error", err });
  }
};

const deleteReport = async (req, res) => {
  const { uuid } = req.params;
  try {
    const report = await Reports.findOne({ where: { uuid } });
    await report.destroy();
    return res.status(200).json({ status: "success", report });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "error", err });
  }
};

const reports = {
  createReport,
  getReportsByUser,
  getReportByUUID,
  deleteReport,
};

module.exports = reports;
