const checkRecord = (attendance) => {
  if (attendance.includes("LLL")) return false;

  let a = 0;
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "A") {
      if (a > 0) return false;
      else a++;
    }
  }

  return true;
};
