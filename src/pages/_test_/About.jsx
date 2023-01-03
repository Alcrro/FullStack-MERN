import React, { useState } from "react";

const About = () => {
  return (
    <>
      <nav className="navbar navbar-main-about p-0">
        <div className="container ">
          <div className="container navbar-inner p-2 d-flex justify-content-between">
            <div className="navbar-branding text-center d-inline-block">
              <a href="/about" className="text-dark fs-2">
                All about my project
              </a>
            </div>
            <div className="form-check form-switch mt-2">
              <input type="checkbox" name="" id="" role="switch" className="form-check-input" />
            </div>
          </div>
        </div>
      </nav>
      <div className="container main-container-inner-about">
        <div className="main-container">
          <ol>
            <li>
              <div className="title-about">
                <h2>Structure Folder: </h2>
              </div>
              <section className="container page-section">
                <ul>
                  <li>
                    <button className="position-relative">
                      <i className="fa-solid fa-turn-down position-absolute m-2"> </i>
                      <div className="container main-structure-folder src fs-3 mx-3">
                        <i className="fa-solid fa-folder-tree"></i> / src:
                      </div>
                    </button>

                    <div className="main-structure-subfolder-inner">
                      <ol>
                        <li>
                          <div className="main-structure-subfolder assets fs-5">
                            <i className="fa-solid fa-folder"></i> / assets:
                          </div>
                          <div className="assets-subfolder-structure">
                            <ul>
                              <li>
                                <div className="fontawesome-subfolder-structure">
                                  <i className="fa-solid fa-folder"></i> Fontawesome:
                                </div>
                              </li>
                              <li>
                                <div className="images-subfolder-structure">
                                  <i className="fa-solid fa-folder"></i> Images:
                                </div>
                              </li>
                              <li>
                                <div className="styles-subfolder-structure">
                                  <i className="fa-solid fa-folder"></i> Styles:
                                </div>
                                <ul>
                                  <li>
                                    <div className="test-subfolder-structure">
                                      <i className="fa-solid fa-folder"></i> _test_:
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder components fs-5">
                            <i className="fa-solid fa-folder"></i> / components:
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder context fs-5">
                            <i className="fa-solid fa-folder"></i> / context:
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder hooks fs-5">
                            <i className="fa-solid fa-folder"></i> / hooks:
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder pages fs-5">
                            <i className="fa-solid fa-folder"></i> / pages:
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder pages fs-5">
                            <i className="fa-solid fa-folder"></i> / routes:
                          </div>
                        </li>
                      </ol>
                    </div>
                  </li>
                </ul>
              </section>
            </li>
            <li>
              <div className="title-about">
                <h2>Structure Folder: </h2>
              </div>
              <section className="container page-section">
                <ul>
                  <li>
                    <div className="container main-structure-folder src fs-3">
                      <i className="fa-solid fa-folder"></i> / src:
                    </div>
                    <div className="main-structure-subfolder-inner">
                      <ol>
                        <li>
                          <div className="main-structure-subfolder assets fs-5">
                            <i className="fa-solid fa-folder"></i> / assets:
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder components fs-5">
                            <i className="fa-solid fa-folder"></i> / components:
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder context fs-5">
                            <i className="fa-solid fa-folder"></i> / context:
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder hooks fs-5">
                            <i className="fa-solid fa-folder"></i> / hooks:
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder pages fs-5">
                            <i className="fa-solid fa-folder"></i> / pages:
                          </div>
                        </li>
                        <li>
                          <div className="main-structure-subfolder pages fs-5">
                            <i className="fa-solid fa-folder"></i> / routes:
                          </div>
                        </li>
                      </ol>
                    </div>
                  </li>
                </ul>
              </section>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default About;
