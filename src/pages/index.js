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
      <div className="graph-insight-container">
        <div className="graph-container">
          <div className="graph-controls-container">
            <div className="graph-date">Today: 5 August, 2018</div>
            <div className="graph-controls">
              <form>
                <select>
                  <option>1 Jan - 1 Jun</option>
                  <option>30 Jan - 31 Dec</option>
                </select>
              </form>
              <div className="graph-control graph-control-backward">
                {" "}
                {"<"}{" "}
              </div>
              <div className="graph-control graph-control-forward"> > </div>
            </div>
          </div>
          <div className="graph">Graph goes in here</div>
        </div>
        <div className="insight-container">
          <div className="insight">
            <div className="insight-title">Orders</div>
            <span className="insight-progress"></span>
            <div className="insight-info">
              <span className="insight-info-title">Pending Orders:</span>
              <span className="insight-info-text insight-info-text-yellow">
                20
              </span>
            </div>
            <div className="insight-info">
              <span className="insight-info-title">Reconcilled Orderr:</span>
              <span className="insight-info-text insight-info-text-green">
                80
              </span>
            </div>

            <div className="insight-info">
              <span className="insight-info-title">Total Orders:</span>
              <span className="insight-info-text insight-info-text-blue">
                100
              </span>
            </div>
          </div>

          <div className="insight">
            <div className="insight-title">Orders</div>
            <span className="insight-progress"></span>
            <div className="insight-info">
              <span className="insight-info-title">Pending Orders:</span>
              <span className="insight-info-text insight-info-text-yellow">
                20
              </span>
            </div>
            <div className="insight-info">
              <span className="insight-info-title">Reconcilled Orderr:</span>
              <span className="insight-info-text insight-info-text-green">
                80
              </span>
            </div>

            <div className="insight-info">
              <span className="insight-info-title">Total Orders:</span>
              <span className="insight-info-text insight-info-text-blue">
                100
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="payments-table">
        <h2 className="payments-title">Payments</h2>
        <div className="payments-table-controls">
          <div className="payments-table-control-showing">
            <span>Showing</span>
            <span className="payments-table-control-showing-form">
              <form>
                <select className="showing-select">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </select>
              </form>
            </span>
            <span>Out of 500 payments</span>
          </div>
          <div className="payments-table-control-search-form">
            <form>
              <input
                type="form"
                className="payments-table-search-input"
                placeholder="search payments"
              />
            </form>
          </div>
          <div className="payments-table-control-filter">
            <span>Show</span>
            <span className="payments-table-control-filter-form">
              <form>
                <select className="showing-select">
                  <option selected>All</option>
                  <option>Reconcilled</option>
                  <option>Un-reconcilled</option>
                  <option>Settled</option>
                  <option>Cancelled</option>
                </select>
              </form>
            </span>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default IndexPage
