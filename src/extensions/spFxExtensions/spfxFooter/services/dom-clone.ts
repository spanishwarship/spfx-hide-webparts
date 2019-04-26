import createTable from './table-create';

function cloneDOMForPrint() {
    //Get a reference to the content
    let mainPage = document.querySelector(".SPPageChrome");

    let cloneMainPage = mainPage.cloneNode(true);

    //Get a table with the content cloned inside
    let newTable = createTable(cloneMainPage, null);

    //Hide the mainPage
    mainPage["style"].display = "none !important";

    //append the new table to the body
    document.body.appendChild(newTable);
}

export default cloneDOMForPrint;