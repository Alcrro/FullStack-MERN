import React from 'react';
import '../_test_/responsiveCard.css';
import Image from '../../../assets/images/avatar.jpg';

function ResponsiveCard() {
  return (
    <div className="card-main-container">
      <div className="container-main">
        <div className="menu-container">
          <div className="sidebar-container sidebar-tree-container relative">
            <div className="sidebar-container-head"></div>
            <div className="sidebar-container-body">
              <div className="sidebar-tree">
                <div className="sidebar-tree-subdepartment">
                  <a href="/" className="sidebar-tree-head">
                    Laptopuri si Accesorry
                    <small> (69159589)</small>
                  </a>
                  <div className="sidebar-tree-body">
                    <a href="/">
                      Laptoprui <small>(69)</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-container sidebar-filter-container"></div>
        </div>
        <div className="page-container">
          <div className="card-collection">
            <div className="card-item">
              <div className="card-v2">
                <div className="card-item-wrapper">
                  <div className="card-badges"></div>
                  <div className="card-toolbox"></div>
                  <div className="card-info">
                    <a href="/" className="card-thumb mrg-btm-xs">
                      <div className="card-thumb-inner">
                        <img src={Image} alt="" className="" />
                      </div>
                    </a>
                    <div className="card-description">
                      <a href="/" className="card-title semibold mrg-btm-xxs">
                        Laptop MacBook Air 13" Retina, QC i7 1.2GHz , 16GB, 512GB, Intel Iris Plus
                        Graphics, Space Gray, INT KB
                      </a>
                    </div>
                  </div>
                  <div className="card-content"></div>
                </div>
              </div>
            </div>
            <div className="card-item">
              <div className="card-v2">
                <div className="card-item-wrapper">
                  <div className="card-badges"></div>
                  <div className="card-toolbox"></div>
                  <div className="card-info"></div>
                  <div className="card-content"></div>
                </div>
              </div>
            </div>
            <div className="card-item">
              <div className="card-v2">
                <div className="card-item-wrapper">
                  <div className="card-badges"></div>
                  <div className="card-toolbox"></div>
                  <div className="card-info"></div>
                  <div className="card-content"></div>
                </div>
              </div>
            </div>
            <div className="card-item">
              <div className="card-v2">
                <div className="card-item-wrapper">
                  <div className="card-badges"></div>
                  <div className="card-toolbox"></div>
                  <div className="card-info"></div>
                  <div className="card-content"></div>
                </div>
              </div>
            </div>
            <div className="card-item">
              <div className="card-v2">
                <div className="card-item-wrapper">
                  <div className="card-badges"></div>
                  <div className="card-toolbox"></div>
                  <div className="card-info"></div>
                  <div className="card-content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveCard;
