function formatDate(date) {
  if (typeof date === "string") {
    const dateInParts = date.split("/");
    const day = +dateInParts[0];
    const month = +dateInParts[1] - 1;
    const year = +dateInParts[2];
    const formatedData = new Date(year, month, day);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - formatedData.getTime()
    const daysDiff = parseInt(timeDiff / (1000 * 3600 * 24)) // convertendo a diferença de milissegundos para dias
    return daysDiff < 10
  } else {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  }
}

export default formatDate;
