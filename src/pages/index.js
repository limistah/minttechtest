import React from "react"
import "./index.css"

import MainLayout from "../layouts/Main"

const IndexPage = () => (
  <MainLayout>
    <div className="main-content-container">
      <div className="info-box-conatainer">
        <div className="info-box-section">
          <div className="info-box">
            <div className="info">
              <span className="info-box-title">Daily Transaction Volume</span>
              <span className="info-box-value">2,342</span>
            </div>
            <div className="chart"></div>
          </div>
          <div className="info-box">
            <div className="info">
              <span className="info-box-title">Daily Transaction Value</span>
              <span className="info-box-value">4,000,000</span>
            </div>
            <div className="chart"></div>
          </div>
        </div>
        <div className="info-box-section">
          <div className="info-box">
            <div className="info">
              <span className="info-box-title">Total Transaction Value</span>
              <span className="info-box-value">2,342</span>
            </div>
            <div className="chart"></div>
          </div>
          <div className="info-box">
            <div className="info">
              <span className="info-box-title">Total Transaction Volume</span>
              <span className="info-box-value">4,000,000</span>
            </div>
            <div className="chart"></div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default IndexPage
