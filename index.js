function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tracklist").deleteRow(i-1);
}