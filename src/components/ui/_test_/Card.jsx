import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="page-container">
      <div className="listing-panel has-floating-listing-panel-footer">
        <div className="listing-panel-heading">
          <div className="listing-page-title js-head-title">
            <h1 className="title-phrasing title-phrasing-xl">Produse Telefoane Mobile Apple</h1>
            <span className="title-phrasing title-phrasing-sm">283 de produse</span>
          </div>
        </div>
        <div className="quick-filter-as-value">
          <div className="quick-filter-as-value-container">
            <div className="filters-carousel">
              <p className="semibold">Alege Model:</p>
              <div
                data-phino="Carousel"
                className="ph-widget ph-carousel ph-at-begin ph-has-arrows"
              >
                <div className="ph-scroller">
                  <div className="ph-body">
                    <div className="quick-filter ph-card">
                      <button>Iphone 13 Pro Max</button>
                    </div>
                    <div className="quick-filter ph-card">
                      <button>Iphone 13 Pro Max</button>
                    </div>{' '}
                    <div className="quick-filter ph-card">
                      <button>Iphone 13 Pro Max</button>
                    </div>{' '}
                    <div className="quick-filter ph-card">
                      <button>Iphone 13 Pro Max</button>
                    </div>{' '}
                    <div className="quick-filter ph-card">
                      <button>Iphone 13 Pro Max</button>
                    </div>{' '}
                    <div className="quick-filter ph-card">
                      <button>Iphone 13 Pro Max</button>
                    </div>
                  </div>
                </div>
                <a href="/" className="ph-left-margin"></a>
                <a href="/" className="ph-right-margin"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
