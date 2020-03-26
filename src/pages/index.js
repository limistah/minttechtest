import React from "react"
import "./index.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import MainLayout from "../layouts/Main"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const InfoBoxChart = () => {
  return (
    <AreaChart
      width={120}
      height={60}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  )
}

const payments = [
  {
    type: 'Apple Mac Book 15" 250 SSD 12 GB',
    price: "$73430",
    trasactionId: "1234567890",
    date: "12:30",
    status: "reconciled",
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12 GB',
    price: "$73430",
    trasactionId: "1234567890",
    date: "12:30",
    status: "pending",
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12 GB',
    price: "$73430",
    trasactionId: "1234567890",
    date: "12:30",
    status: "unreconcilled",
  },
]

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
            <div className="chart">
              <InfoBoxChart />
            </div>
          </div>
          <div className="info-box">
            <div className="info">
              <span className="info-box-title">Daily Transaction Value</span>
              <span className="info-box-value">4,000,000</span>
            </div>
            <div className="chart">
              <InfoBoxChart />
            </div>
          </div>
        </div>
        <div className="info-box-section">
          <div className="info-box">
            <div className="info">
              <span className="info-box-title">Total Transaction Value</span>
              <span className="info-box-value">2,342</span>
            </div>
            <div className="chart">
              <InfoBoxChart />
            </div>
          </div>
          <div className="info-box">
            <div className="info">
              <span className="info-box-title">Total Transaction Volume</span>
              <span className="info-box-value">4,000,000</span>
            </div>
            <div className="chart">
              <InfoBoxChart />
            </div>
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
          <div className="graph">
            <AreaChart
              width={600}
              height={200}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="amt"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </div>
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
            <form className="app-searchbar">
              <svg
                className="app-searchbar-icon"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6573 12L7.66054 8.00325C6.77101 8.80345 5.60422 9.22472 4.40868 9.17734C3.21314 9.12995 2.08334 8.61766 1.25994 7.74958C0.436537 6.8815 -0.0153972 5.72623 0.000400647 4.52986C0.0161985 3.33348 0.49848 2.19056 1.34452 1.34452C2.19056 0.49848 3.33348 0.0161985 4.52986 0.000400647C5.72623 -0.0153972 6.8815 0.436537 7.74958 1.25994C8.61766 2.08334 9.12995 3.21314 9.17734 4.40868C9.22472 5.60422 8.80345 6.77101 8.00325 7.66054L12 11.6573L11.6573 12ZM4.5954 0.492454C3.7833 0.489588 2.98862 0.727783 2.31199 1.17687C1.63536 1.62597 1.10723 2.26575 0.794463 3.01521C0.481699 3.76467 0.398378 4.59008 0.555052 5.38693C0.711726 6.18377 1.10135 6.9162 1.67457 7.49146C2.2478 8.06671 2.97884 8.45892 3.77513 8.61841C4.57142 8.7779 5.39712 8.6975 6.14768 8.38739C6.89824 8.07727 7.53989 7.5514 7.99137 6.87637C8.44285 6.20133 8.68385 5.4075 8.68386 4.5954C8.68259 3.51012 8.2519 2.46945 7.48585 1.70069C6.71981 0.931925 5.68066 0.497555 4.5954 0.492454Z"
                  fill="#0E1D25"
                />
              </svg>

              <input
                className="app-searchbar-input"
                type="text"
                placeholder="search"
              />
            </form>
          </div>
          <div className="payments-table-control-filter">
            <div>Show</div>
            <form className="payments-table-control-filter-form">
              <select className="showing-select">
                <option selected>All</option>
                <option>Reconcilled</option>
                <option>Un-reconcilled</option>
                <option>Settled</option>
                <option>Cancelled</option>
              </select>
            </form>
          </div>
        </div>

        <table className="payments-table-data">
          <thead>
            <tr className="">
              <th className="payment-table-head payment-table-head-type">
                Item Type
              </th>
              <th className="payment-table-head payment-table-head-price">
                Price
              </th>
              <th className="payment-table-head payment-table-head-id">
                Transaction No
              </th>
              <th className="payment-table-head payment-table-head-date">
                Date
              </th>
              <th className="payment-table-head payment-table-head-status">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => {
              return (
                <tr className="payments-table-data-row">
                  <td className="payments-table-type">{payment.type}</td>
                  <td className="payments-table-price">{payment.price}</td>
                  <td className="payments-table-id">{payment.trasactionId}</td>
                  <td className="payments-table-date">{payment.date}</td>
                  <td className="payments-table-status">
                    <span
                      className={`payments-table-status-badge ${payment.status}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="payment-table-navigation">
          <div className="payment-table-navigation-info">
            Showing 1 to 10 of 100
          </div>
          <div className="payment-table-navigation-buttons">
            <a className="payment-table-navigation-button" href="#/">
              Previous
            </a>
            <a
              className="payment-table-navigation-button payment-table-navigation-active-button"
              href="#/"
            >
              1
            </a>

            <a className="payment-table-navigation-button" href="#/">
              2
            </a>
            <a className="payment-table-navigation-button" href="#/">
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default IndexPage
