import React from "react"
import "./styles.css"

export default function Header() {
  return (
    <div className="header flex-col-hstart-vstart">
      <div className="flex-row">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0cmgh6s80utn-211%3A531?alt=media&token=29c097a9-da27-41d3-9604-77ce3d97e87a"
          alt="Not Found"
          className="nester-live-icon-1"
        />
        <p className="txt-3710 flex-hcenter">Nester Live</p>
        <div className="group-2">
          <div className="rectangle-5" />
          <div className="flex-row">
            <p className="txt-751">Features</p>
            <p className="txt-222">Pricing</p>
            <p className="txt-988">FAQs</p>
            <p className="txt-481">Contact</p>
          </div>
        </div>
        <div className="group-10">
          <p className="txt-204 flex-hcenter">Log in</p>
        </div>
        <div className="group-9">
          <p className="txt-843 flex-hcenter">Start Free</p>
        </div>
      </div>
    </div>
  )
}
