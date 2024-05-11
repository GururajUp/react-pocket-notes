import React, {useState } from 'react'
import './Dstyle.css'

function Create({ groupNamesParent, setGroupNamesParent, onClose }) {
    const [groupName, setGroupName] = useState("");
    const [bgColor, setBgColor] = useState("");

    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value);
    };

    const handleColorChange = (e) => {
        setBgColor(getComputedStyle(e.target).backgroundColor);
    };

    const saveGroup = () => {
        const newGroup = { name: groupName, color: bgColor };
        const updatedGroups = [...groupNamesParent, newGroup];
        setGroupNamesParent(updatedGroups);
        localStorage.setItem("groupNames", JSON.stringify(updatedGroups));
        setGroupName("");
        onClose();
    };

    const colorDivClass = (color) =>
        `color_input_color_${color} ${
            bgColor ===
            getComputedStyle(document.documentElement).getPropertyValue(
                `--color-${color}`
            )
                ? "highlight"
                : ""
        }`;    
  return (
    <div className="main">
            <div className="class-1">
                <div className="title">Create New Notes Group</div>
                <div className="input-1">
                    <span>Group Name</span>
                    <input
                        type="text"
                        value={groupName}
                        onChange={handleGroupNameChange}
                        placeholder="Enter Group Name..."
                    />
                </div>
                <div className="color_input">
                    <span>Choose color</span>
                    <div className="color-class">
                    <div
                            className={colorDivClass(1)}
                            onClick={handleColorChange}
                        ></div>
                        <div
                            className={colorDivClass(2)}
                            onClick={handleColorChange}
                        ></div>
                        <div
                            className={colorDivClass(3)}
                            onClick={handleColorChange}
                        ></div>
                        <div
                            className={colorDivClass(4)}
                            onClick={handleColorChange}
                        ></div>
                        <div
                            className={colorDivClass(5)}
                            onClick={handleColorChange}
                        ></div>
                        <div
                            className={colorDivClass(6)}
                            onClick={handleColorChange}
                        ></div>
                    </div>
                </div>
                <div className="submit-class">
                    <button onClick={saveGroup} disabled={!groupName.trim()}>
                        Create
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Create