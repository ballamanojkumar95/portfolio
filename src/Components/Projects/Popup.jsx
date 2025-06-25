import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './Popup.css'
function PopupOpen({handleClose,popUpData,title}) {
  
  return (
    <div>
      <Popup  open={true} modal closeOnDocumentClick={false}>
        {(close) => (
          <div className="modal">
            <button className="close" onClick={
                () => {
                    console.log("modal closed ");
                    handleClose()
                    close();
                  }
            }>
              &times;
            </button>
            <div className="header"> <h3>{title}</h3> </div>
            <div className="content">
             {popUpData}
            </div>
            <div className="actions">
              <button 
                className="button border px-5 rounded-xl  hover:border-orange hover:bg-[#fff] border-1"
                onClick={() => {
                  handleClose();
                  close();
                }}
              >
                Close 
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopupOpen;
