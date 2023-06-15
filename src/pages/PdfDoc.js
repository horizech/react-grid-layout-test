import React, { useState } from 'react'; 
import { pdfjs, Document, Page } from 'react-pdf'; 
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; import 'react-pdf/dist/esm/Page/TextLayer.css';
// import './Sample.css';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url,).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = { cMapUrl: 'cmaps/', standardFontDataUrl: 'standard_fonts/', };

// type PDFFile = string | File | null;
const _PdfDoc = () => {
    
    const [file, setFile] = useState('sample.pdf'); 
    const [numPages, setNumPages] = useState(0);
    
    // function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     const { files } = event.target;
    //     if (files && files[0]) { setFile(files[0] || null); }
    // }
    
    function onDocumentLoadSuccess({ numPages: nextNumPages }) { setNumPages(nextNumPages); }

    return (<div className="Example">
        <header>
            <h1>react-pdf sample page</h1>
        </header>      <div className="Example__container">
            <div className="Example__container__document">
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                    {Array.from(new Array(numPages), (el, index) => (<Page key={`page_${index + 1}`} pageNumber={index + 1} />))}
                </Document>
            </div>
        </div>
    </div>);
}

export const PdfDoc = _PdfDoc;