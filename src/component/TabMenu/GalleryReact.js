import React, {useState} from 'react'
import "../TabMenu/tab.css";
import Menu from "./menu";
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

const allCatValues = [...new Set(Menu.map((curElem) => {return curElem.category;})), 'all'];

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems] = useState(allCatValues);
    
    const filterItem = (category) => {
        if(category === 'All'){
            setItems(Menu);
            return;
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            {/* my main list section  */}
            <CatMenu filterItem={filterItem} catItems={catItems}/>
            
            {/* my main items section  */}
            <MenuItems  items={items}/>
            
        </>
    )
}

export default GalleryReact
