import React from "react";

const ModalInner = (props) => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                    {props.children}
                    This is Modal content
                </div>
                <div className="modal-footer">
                    <div className="col-2">
                    <button onClick={props.edit} className="button">Edit</button>
                </div>
                <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

export default ModalInner;