import React from 'react';

function Sticker({ sticker, onChange, onDelete, onSave }) {
    let prevPosition = { x: 0, y: 0 };

    function onValueChange(e) {
        onChange(sticker.id, { [e.target.name]: e.target.value });
    }

    function getStickerStyle() {
        const { x, y } = sticker;
        return {
            ...stickerStyle,
            top: y,
            left: x,
        };
    }

    function startDrag(e) {
        prevPosition = {
            x: e.clientX,
            y: e.clientY,
        };
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    }

    function stopDrag(e) {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }

    function drag(e) {
        const { x, y } = sticker;

        onChange(sticker.id, {
            x: x + (e.clientX - prevPosition.x),
            y: y + (e.clientY - prevPosition.y),
        });
    }

    function saveSticker() {
        onSave(sticker.id);
    }

    return (
        <div style={getStickerStyle()}>
            <div style={stickerHeaderStyle}>
                <span
                    style={moveBtnStyle}
                    onMouseDown={startDrag}
                    onMouseUp={saveSticker}
                >
                    o
                </span>
                <span
                    style={deleteBtnStyle}
                    onClick={onDelete.bind(null, sticker)}
                >
                    x
                </span>
            </div>
            <div style={stickerBodyStyle}>
                <textarea
                    name="description"
                    style={desciptionInputStyle}
                    value={sticker.description}
                    onChange={onValueChange}
                    onBlur={saveSticker}
                />
            </div>
        </div>
    );
}

const stickerStyle = {
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '1px solid black',
    backgroundColor: 'lightyellow',
};

const stickerHeaderStyle = {
    padding: '5px',
};

const deleteBtnStyle = {
    cursor: 'pointer',
    float: 'right',
    fontWeight: 'bold',
};

const moveBtnStyle = {
    ...deleteBtnStyle,
    float: 'left',
    cursor: 'move',
};

const stickerBodyStyle = {
    padding: '5px',
};

const desciptionInputStyle = {
    width: '180px',
    height: '150px',
};

export default Sticker;