function addStylesheetRules() {
  if (!document.querySelector("#spfx-footer-styles")) {
    var styleEl = document.createElement('style');

    // Append <style> element to <head>
    document.head.appendChild(styleEl);

    styleEl.id = "spfx-footer-styles";
    // Grab style element's sheet
    var styleSheet = styleEl.sheet;

    //Fix for list webparts so that they do not hit a page break
    styleSheet["insertRule"]('@media print {div.ms-Fabric[class*="detailsList_"] { page-break-inside: avoid !important; max-height: 1000px; overflow: hidden; border: thin solid white; }}', 0);
    
    //Make the header title on lists size a little larger. For some reason it prints much smaller than on screen size without this.
    styleSheet["insertRule"]('@media print {div[class*="webPartHeader_"] span[role="heading"] { font-size: 2em !important; }}', 0);

    //Monday Memo Page Layout Fixes
    styleSheet["insertRule"]('@media print {body { width: 90% !important; }}', 0);
    styleSheet["insertRule"]('@media print {.Canvas.Canvas--withLayout.grid.Original { width: 80% !important; }}', 0);
    styleSheet["insertRule"]('@media print {.SPPageChrome {width: 80% !important;}}', 0);
    styleSheet["insertRule"]('@media print {div[class*="mainContent_"] {max-width: 1400px !important;}}', 0);

    //Ensure that content shows without needing to scroll down.
    styleSheet["insertRule"]('@media print {div[data-sp-feature-tag*="ListWebPart"] { opacity: 1 !important; }}', 0);
    styleSheet["insertRule"]('@media print {div[data-sp-feature-tag*="ImageWebPart"] { opacity: 1 !important; }}', 0);
    styleSheet["insertRule"]('@media print {.Canvas-slideUpIn {opacity: 1 !important;}}', 0);
    styleSheet["insertRule"]('@media print {.ControlZone {opacity: 1 !important;}}', 0);
    styleSheet["insertRule"]('@media print {[dir=ltr] .CanvasSection-col {opacity: 1 !important;}}', 0);

    //Hide the buttons above the page content like "Edit" and "Publish"
    styleSheet["insertRule"]('@media print {.commandBarWrapper { visibility: hidden; }}', 0);
    styleSheet["insertRule"]('@media print {.ms-CommandBar-primaryCommand { visibility: hidden; }}', 0);
    styleSheet["insertRule"]('@media print {button[data-automation-id="pageCommandBarEditButton"] { visibility: hidden; }}', 0);
    styleSheet["insertRule"]('div[class*="mainContent_"] { font-family: "Segoe UI Web (West European)",Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;}', 0);
    
    // Switch Elements to "display: block" to minimize blank pages printed after content.
    styleSheet["insertRule"]('@media print {.spAppAndPropertyPanelNavBelowHeader, div[class*="pageLayoutDesktop_"], div[class*="layoutWrapper_"], div[class*="scrollRegion_"], div[class*="canvasWrapper_"] {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.classHere {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.Canvas {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.CanvasComponent {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.CanvasComponent > div {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.SPCanvas {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.SPCanvas-canvas {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {div[class*="belowHeader_"] {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {div[class*="commentsWrapper_"] {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {div[class*="mainContent_"] {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.spAppAndPropertyPanelContainer {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {#spPageChromeAppDiv {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {#spPageCanvasContent {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.SPPageChrome-app {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.SPPageChrome-app > div {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.sp-pageLayout-navBelowHeader {display: block !important;}}', 0);
    styleSheet["insertRule"]('@media print {.sp-pageLayout-navBelowHeader > div {display: block !important;}}', 0);

    // Hide empty divs to minimize blank pages
    styleSheet["insertRule"]('@media print {div:empty {display: none !important;}}', 0);

    // Position footer at bottom of page when printing
    styleSheet["insertRule"]('@media print {.sp-placeholder-bottom, .os-Files-extensionPlaceHolder {display: block !important; position: fixed; left: 0; bottom: 0; width: 99%; height: 60px;}}', 0);
    // styleSheet["insertRule"]('@media print {.sp-placeholder-bottom {transform: rotate(90deg); transform-origin: 0; position: fixed; left: 0; top: -40px; width: 129.4117%; height: 80px;}}', 0);

    // hide Feedback and Get Mobile App buttons
    styleSheet["insertRule"]('div[class*="feedback_"] { display: none; }', 0);
  }
}

export default addStylesheetRules;