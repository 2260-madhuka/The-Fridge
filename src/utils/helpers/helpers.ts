import moment from "moment";

export const expiryDateCheck = (expiryDate: string) => {
  let expiryStatus = "";

  const now = moment(moment().format("YYYY/MM/DD")); //todays date
  const end = moment(expiryDate).format("YYYY/MM/DD"); // another date
  const duration = moment(end).diff(now, "days");
  if (duration <= 30) {
    expiryStatus = "Expiring soon";
  } else if (duration > 30) {
    expiryStatus = "Healthy";
  } else {
    expiryStatus = "Expired";
  }

  return expiryStatus;
};
