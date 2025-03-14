class csvExport {
  constructor(table, header = true) {
    this.table = table;
    this.rows = Array.from(table.querySelectorAll("tr"));
    if (!header && this.rows[0].querySelectorAll("th").length) {
      this.rows.shift();
    }
    // console.log(this._longestRow());
  }
  exportCsv() {
    const lines = [];
    const ncols = this._longestRow();
    for (const row of this.rows) {
      let line = "";
      for (let i = 0; i < ncols; i++) {
        if (row.children[i] !== undefined) {
          line += row.children[i].textContent;
        }
        line += i !== ncols - 1 ? "," : "";
      }
      lines.push(line);
    }
    console.log(lines);
    return lines.join("\n");
  }
  _longestRow() {
    return this.rows.reduce(
      (length, row) =>
        row.childElementCount > length ? row.childElementCount : length,
      0
    );
  }
}
const btnElement = document.querySelector("#btncsv");
const tableElement = document.querySelector("#table");
btnElement.addEventListener("click", () => {
  const obj = new csvExport(tableElement);
  const csvData = obj.exportCsv();
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "file.csv";
  a.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 500);
});
