import React from 'react'
import logo from "../../assets/logo.png";
import lock from "../../assets/lock.png";
import "./Dstyle.css";


function Home() {
  return (
    <div className="desk_home">
			<img src={logo} alt="logo" />
			<h1>Pocket Notes</h1>
			<p>
				Send and receive messages without keeping your phone online.
				<br />
				Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.
			</p>
			<div className="encryption-msg">
				<img src={lock} alt="lock" />
				<span> end-to-end encrypted</span>
			</div>
		</div>
  )
}

export default Home