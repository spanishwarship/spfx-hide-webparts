import createTable from './table-create';
import triggerResize from '../lib/resize-trigger';

function handlePrint() {
    let table, mainPage, printZone, footer;
    let listMainPage, listPrintZone, listFooter;
    let searchMainPage, searchPrintZone, searchFooter;

    // document["printFunc"] = () => {
    window.onbeforeprint = () => {
        //Get a reference to the content
        mainPage = document.querySelector(".SPPageChrome");
        listMainPage = document.querySelector('#spoAppComponent');
        printZone = document.querySelector('div[class*="mainContent_"]');
        listPrintZone = document.querySelector('.Files-content');
        footer = document.querySelector('.sp-placeholder-bottom');
        listFooter = document.querySelector('.os-Files-extensionPlaceHolder[data-sp-placeholder="Bottom"]');

        searchPrintZone = document.querySelector('div[class*="searchResultsContainer_"]');
        
        // mainPage["style"].display = "block !important";
        // let cloneMainPage = mainPage.cloneNode(true);
        if (printZone) {
            let clonePrintZone = printZone.cloneNode(true);
            let cloneFooter = footer.cloneNode(true);
    
            mainPage["style"].display = "none";  
            clonePrintZone["style"]["max-width"] = "1400px !important";
    
            //Get a table with the content cloned inside
            table = createTable(clonePrintZone, cloneFooter);
        } else if (listPrintZone) {

            let clonePrintZone = listPrintZone.cloneNode(true);
            let cloneFooter = listFooter.cloneNode(true);
    
            listMainPage["style"].display = "none";  
            // clonePrintZone["style"]["max-width"] = "1400px !important";
    
            //Get a table with the content cloned inside
            table = createTable(clonePrintZone, cloneFooter);
        } else if (searchPrintZone) {
            let clonePrintZone = searchPrintZone.cloneNode(true);
            let cloneFooter = footer.cloneNode(true);

            mainPage["style"].display = "none";  
            clonePrintZone["style"]["max-width"] = "1400px !important";
    
            //Get a table with the content cloned inside
            table = createTable(clonePrintZone, cloneFooter);
        }
            //append the new table to the body
            document.body.appendChild(table);
            triggerResize();
        
    };

    // document["returnFunc"] = () => {
    window.onafterprint = () => {
        let newTable = document.querySelector("#spfx-print-table");

        newTable.parentElement.removeChild(newTable);
        if (mainPage) {
            mainPage["style"].display = "";
        } else if (listMainPage) {
            listMainPage["style"].display = "";
        }

        triggerResize();
    };
}

export default handlePrint;