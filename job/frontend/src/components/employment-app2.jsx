import React, { useState, useEffect } from "react";
import Header from "./header";
import "../CSS/employment-app2.css";
import Empapp2img from "../images/empapp2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./footer";

export default function Employment_app2() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="empapp2outer">
      <Header />
      <div className="empapp2imgbox">
        <img
          src={Empapp2img}
          className="empapp2img img-fluid d-block"
          alt="Responsive image"
        />
      </div>
      <div className="floatheader" data-aos="fade-right">
        <p className="empappli">Employment Application</p>
        <p className="emplapplowt">
          Fill the form below accurately indicating your potentials and
          suitability to job applying for.
        </p>
      </div>

      <div className="empapp2formfill col-6">
        <div className="row empapp2gapper">
          <p className="labeltagempformheader">Personal Details</p>
        </div>

        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              <span style={{ color: "red" }}>*</span>Name
            </p>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="First Name"
            />
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              <span style={{ color: "red" }}>*</span>Birth Day
            </p>
          </div>
          <div className="col-xl-2">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Month"
            />
          </div>
          <div className="col-xl-4">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Day"
            />
          </div>
          <div className="col-xl-4">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Year"
            />
          </div>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              {" "}
              <span style={{ color: "red" }}>*</span>Phone Number{" "}
            </p>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className=" form-control empapp2inputs"
              placeholder="Area Code"
            />
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Number"
            />
          </div>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              {" "}
              <span style={{ color: "red" }}>*</span>E-mail Address{" "}
            </p>
          </div>
          <div className="col-xl-10">
            <input type="text" className="form-control" placeholder="" />
          </div>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2">
            <p className="labeltagempform">
              {" "}
              <span style={{ color: "red" }}>*</span>Address
            </p>
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Street Address 1"
            />
          </div>
          <div className="col-xl-5">
            <input
              type="text"
              className=" form-control empapp2inputs"
              placeholder="Street Address 2"
            />
          </div>
        </div>
        <div className="row empapp2gapper">
          <div className="col-xl-2"></div>
          <div className="col-xl-4">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="City"
            />
          </div>
          <div className="col-lg-4">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="State/Province"
            />
          </div>
          <div className="col-lg-2">
            <input
              type="text"
              className="form-control empapp2inputs"
              placeholder="Postal code"
            />
          </div>
          <div>
            <div className="row empapp2gapper">
              <p className="labeltagempformheader">
                How were you referd to us?
              </p>
            </div>

            <div className="row empapp2gapper">
              <div className="col-lg-3">
                <input
                  class="form-check-input checkboxstyleempapp"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Twitter
                </label>
              </div>
              <div className="col-lg-5">
                <input
                  class="form-check-input checkboxstyleempapp"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Employee
                </label>
              </div>
            </div>

            <div className="row empapp2gapper">
              <div className="col-lg-3">
                <input
                  class="form-check-input checkboxstyleempapp"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  {" "}
                  Facebook{" "}
                </label>
              </div>
              <div className="col-lg-5">
                <input
                  class="form-check-input checkboxstyleempapp"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  News Paper
                </label>
              </div>
            </div>

            <div className="row empapp2gapper">
              <div className="col-lg-3">
                <input
                  class="form-check-input checkboxstyleempapp"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Linkdin
                </label>
              </div>
              <div className="col-lg-5">
                <input
                  class="form-check-input checkboxstyleempapp"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Other
                </label>
              </div>
            </div>

            <div className="row empapp2gapper" style={{ marginTop: "30px" }}>
              <div className="col-xl-2 labeltagempformheader">
                Upload Resume
              </div>
              <div className="col-xl-2">
                <p
                  className=" labeltagempform"
                  style={{ color: "#0C4EF8", textDecoration: "underline" }}
                >
                  No file Choosen
                </p>
              </div>
              <div className="col-xl-8">
                <button
                  type="button"
                  class="btn btn btn-success"
                  style={{ borderRadius: "25px", padding: "5px 20px" }}
                >
                  Upload
                </button>{" "}
              </div>
            </div>

            <div className="row empapp2gapper">
              <p className="labeltagempformheader">Jobs skills & Training</p>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <textarea
                  className="form-control empapp2input"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="row empapp2gapper">
              <p className="labeltagempformheader">
                References Please list one (1) references that are familiar with
                your work life.
              </p>
            </div>

            <div className="row empapp2gapper">
              <div className="col-xl-2">
                <p className="labeltagempform">
                  <span style={{ color: "red" }}>*</span>Name
                </p>
              </div>
              <div className="col-xl-5">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="First Name"
                />
              </div>
              <div className="col-xl-5">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row empapp2gapper">
              <div className="col-xl-2">
                <p className="labeltagempform">
                  <span style={{ color: "red" }}>*</span>Birth Day
                </p>
              </div>
              <div className="col-xl-3">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="Month"
                />
              </div>
              <div className="col-xl-3">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="Day"
                />
              </div>
              <div className="col-xl-4">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="Year"
                />
              </div>
            </div>
            <div className="row empapp2gapper">
              <div className="col-xl-2">
                <p className="labeltagempform">
                  <span style={{ color: "red" }}>*</span>Phone Number
                </p>
              </div>
              <div className="col-xl-5">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="Area Code"
                />
              </div>
              <div className="col-xl-5">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="Number"
                />
              </div>
            </div>
            <div className="row empapp2gapper">
              <div className="col-xl-2">
                <p className="labeltagempform">
                  <span style={{ color: "red" }}>*</span>E-mail Address
                </p>
              </div>
              <div className="col-xl-10">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder=""
                />
              </div>
            </div>
            <div className="row empapp2gapper">
              <div className="col-xl-2">
                <p className="labeltagempform">
                  <span style={{ color: "red" }}>*</span>Address
                </p>
              </div>
              <div className="col-xl-5">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="Street Address 1"
                />
              </div>
              <div className="col-xl-5">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="Street Address 2"
                />
              </div>
            </div>
            <div className="row empapp2gapper">
              <div className="col-xl-2"></div>
              <div className="col-xl-4">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="City"
                />
              </div>
              <div className="col-xl-4">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="State/Province"
                />
              </div>
              <div className="col-xl-2">
                <input
                  type="text"
                  className="form-control empapp2inputs"
                  placeholder="Postal code"
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="row"><button type="button" className="btn empapp2savetbn">Save</button></div>
        
      </div>
      <Footer />
    </div>
  );
}
