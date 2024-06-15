import React from "react";
import "./report.css";

function Report() {
  return (
    <section className="ServicesReport">
      <div className="wrapper flexcolumn">
        <div className="ReportContent flexrow">
          <h1>How to report a <br /> damage?</h1>
          <p>
            Ut ex turpis, faucibus sed feugiat ut, tempus nec <br /> nisi. Etiam
            vehicula est ut erat congue, et pulvinar <br /> sit lorem nibh aliquet.
          </p>
        </div>
        <div className="ReportNumbers">
          <ul className="flexrow">
            <li className="flexcolumn">
              <span>1</span>
              <p>Curabitur sed iaculis dolor</p>
            </li>
            <li className="flexcolumn">
              <span>2</span>
              <p>Aliquam fringilla aliquam</p>
            </li>
            <li className="flexcolumn">
              <span>3</span>
              <p>Pretium auctor sapien</p>
            </li>
            <li className="flexcolumn">
              <span>4</span>
              <p>Sollicitudin feugiat</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Report;
