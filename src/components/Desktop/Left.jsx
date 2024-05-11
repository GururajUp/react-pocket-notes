import React, {useState, useEffect} from 'react'
import Create from './Create';
import Noteswrite from './Noteswrite';
import './Dstyle.css'

function Left({ selected, setSelected }) {
    const [titles, setTitles] = useState([]);
	const [showCreate, setShowCreate] = useState(false);
	const [groupNamesParent, setGroupNamesParent] = useState(
		localStorage.getItem("groupNames") || []
	);

	useEffect(() => {
		const data = localStorage.getItem("groupNames");
		if (data) {
			setGroupNamesParent(JSON.parse(data));
		} else {
			setGroupNamesParent([]);
		}
	}, []);

	useEffect(() => {
		if (groupNamesParent.length > 0) {
			const obj = JSON.parse(localStorage.getItem("groupNames"));
			const result = Object.keys(obj).map((key) => [obj[key]]);
			setTitles(result);
		}
	}, [groupNamesParent]);

	const handleClick = () => {
		setShowCreate(true);
	};

	const handleClose = () => {
		setShowCreate(false);
	};

  return (
    <div className="desk_sidebar">
    <div className="desk_sidebar_heading">Pocket Notes</div>
    <div className="desk_sidebar_btn">
        <button onClick={handleClick}>
            <span id="add">+</span>
        </button>
    </div>
    <div className="desk_sidebar_notes_heading">
        {titles.length > 0 ? (
            titles.map((title, index) => (
                <Noteswrite
                    selected={selected}
                    setSelected={setSelected}
                    key={index}
                    title={title}
                />
            ))
        ) : (
            <div className="desk_sidebar_notes_title_empty"></div>
        )}
    </div>
    {showCreate && (
        <div className="main">
            <Create
                groupNamesParent={groupNamesParent}
                setGroupNamesParent={setGroupNamesParent}
                onClose={handleClose}
            />
        </div>
    )}
</div>
  )
}

export default Left