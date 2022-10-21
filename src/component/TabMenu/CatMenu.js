import React from 'react';

const CatMenu = ({filterItem, catItems}) => {
    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">                
                    {
                        catItems.map((curCelem,index) => {
                            return <button className="btn btn-warning" key={index} onClick={() => filterItem(curCelem)}>{curCelem}</button>
                        })
                    }
                
                </div>
            </div>
        </>
    );
};
export default CatMenu;