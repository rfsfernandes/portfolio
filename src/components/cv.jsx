import React, { useState } from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Pagination from "@material-ui/lab/Pagination";

function CV() {
  const pdf = process.env.PUBLIC_URL + "/pdf/cv.pdf";

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-12">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        My Curriculum <span class="about_span">Vitae</span>.
                      </h5>
                    </div>
                    <a href={pdf} target="_blank">
                    <div className="pdf-doc-container" >
                      <Document
                        className="pdf-doc"
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>
                      
                    </div>
                    </a>
                    <div>
                        <Pagination
                          className="pdf-pagination"
                          count={numPages}
                          shape="rounded"
                          onChange={handleChange}
                        />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
