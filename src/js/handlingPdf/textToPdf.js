
/**
 *@author ooganesyan
 *
 */
//
//Default export is a4 paper, portrait, using millimeters for units
import {jsPDF} from "jspdf";
//
//console.log( JSON.stringify(jsPDF));
//
const doc = new jsPDF();

//console.log( JSON.stringify(doc));

// Path to PDF file
let PDF_URL = '/src/data/pdfFiles/BenAlmanTheres_no_such_thing_as_a_JSON.pdf';
let PDF_WORKER = '/src/utils/pdfUtil/pdf.worker';
// Specify the path to the worker
doc.workerSrc = PDF_WORKER;

console.log( 'Text to pdf: ', JSON.stringify(doc.workerSrc));

doc.text("Hello world!", 10, 10);
//doc.save("a4.pdf");
//
doc.getDocument(PDF_URL).then(function (PDFDocumentInstance) {
    // Use the PDFDocumentInstance To extract the text later
    //var totalPages = PDFDocumentInstance.numPages;
    var pageNumber = 1;

    // Extract the text
    getPageText(pageNumber , PDFDocumentInstance).then(function(textPage){
        // Show the text of the page in the console
        console.log(textPage);
    });

}, function (reason) {
    // PDF loading error
    console.error('jsPDF.getDocument error: ', reason);
});


/**
 * Retrieves the text of a specif page within a PDF Document obtained through pdf.js
 *
 * @param {Integer} pageNum Specifies the number of the page
 * @param {PDFDocument} PDFDocumentInstance The PDF document obtained
 **/
function getPageText(pageNum, PDFDocumentInstance) {
    // Return a Promise that is solved once the text of the page is retrieven
    return new Promise(function (resolve, reject) {
        PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
            // The main trick to obtain the text of the PDF page, use the getTextContent method
            pdfPage.getTextContent().then(function (textContent) {
                var textItems = textContent.items;
                var finalString = "";

                // Concatenate the string of the item to the final string
                for (var i = 0; i < textItems.length; i++) {
                    var item = textItems[i];

                    finalString += item.str + " ";
                }

                // Solve promise with the text retrieven from the page
                resolve(finalString);
            });
        });
    });
}
