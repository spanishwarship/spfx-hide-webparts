function createTable(contentBody, contentFooter) {
    //create the table elem
    var table = document.createElement('table');

    //Give the table an ID to reference later
    table.id = "spfx-print-table";

    //Create the tbody
    table.appendChild(document.createElement("tbody"));

    var tBody = table.querySelector('tbody');

    //append the content
    // tBody.appendChild(contentBody);
    tBody.style.width = "100%";
    let body = tBody.insertRow(0);
    let bcell = body.insertCell(0);

    bcell.appendChild(contentBody);

    //create the footer
    var footer = table.createTFoot();

    //insert a footer row
    var row = footer.insertRow(0);
    //give the footer row a height
    row.style.height = "60px";

    var cell = row.insertCell(0);
    cell.style.height = "60px";
    cell.appendChild(contentFooter);
    
    return table;
}

export default createTable;