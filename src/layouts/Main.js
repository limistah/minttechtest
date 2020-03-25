import React from "react"
import Logo from "../components/Logo"
import Searchbar from "../components/Searchbar"
import TopbarMeta from "../components/TopbarMeta"

function Main() {
  return (
    <>
      <div className="top-bar">
        <Logo />
        <div className="top-bar-container">
          <Searchbar />
          <TopbarMeta />
        </div>
      </div>
      <div className="app-container">
        <div class="sidebar">
          <div className="sidebar-container">
            <div className="sidebar-action-button-container">
              <a href="#invoice" className="btn btn-green">
                Generate Invoice
              </a>
            </div>
          </div>
        </div>
        <div class="content-section"></div>
      </div>
    </>
  )
}

export default Main
