import React, {useState} from 'react'
import './Dmain.css'
import Left from '../components/Desktop/Left';
import Right from '../components/Desktop/Right';
import Home from '../components/Desktop/Home'


function Dmain() {
    const [selected, setSelected] = useState("");
	const [notes, setNotes] = useState([]);
  return (
    <div className="desktop">
			<Left selected={selected} setSelected={setSelected} />
			{selected.length > 0 ? (
				<Right
					notes={notes}
					setNotes={setNotes}
					selected={selected}
					setSelected={setSelected}
				/>
			) : (
				<Home />
			)}
		</div>
  )
}

export default Dmain