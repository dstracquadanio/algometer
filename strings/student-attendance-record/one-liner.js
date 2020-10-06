const checkRecord = (attendance) => {
  return attendance.split("A").length <= 2 && attendance.indexOf("LLL") === -1;
};
