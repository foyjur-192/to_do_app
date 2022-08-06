import React, { useEffect, useState } from 'react';
import img from '../image/logo.png'
import './Todo.css'


//To get data from LS
const getLocalItem = () => {
    let list = localStorage.getItem('lists');
  console.log(list);
  if(list){
      return JSON.parse(localStorage.getItem('lists'));
  }else {
      return[];
  }
}




const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItem());
    const addItem = () => {
        if(!inputData){

        }else{
            setItems([...items, inputData]);
            setInputData('')
        }
     
    }  
    const deleteItem = (id) =>{
     const updateItems = items.filter((elem, ind) => {
         return ind === id;
     });
     setItems(updateItems);
    }
    
    //Remove All
    const removeAll = () => {
        setItems([]);
    }
       
    //Add data to localStorage
    useEffect(() =>{
      localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);
    
   
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={img} alt="" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems ">
                  
                        <input type='text' placeholder="Add Items..." value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />
                        <i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i>
                    </div>
                    <div className="showItems">
                        {
                            items.map((elem, ind) => {

                                return(
                                   <div className="eachItem" key={ind}>
                                   <h3>{elem}</h3>
                                   <i className='far fa-trash-alt add-btn'  title="Delete Item" onClick={() => deleteItem(ind)}></i>
                                   
                               </div>
                        
                                )
                            })
                        }

           
                     
                    </div>
                    {/* clear all button */}
                    <div className="showItems">
                        <button className='btn effect04' onClick={removeAll} data-sm-link-text="Remove All" > <span>CHECK LIST</span>    </button>
                    </div>



                </div>
            </div>


        </>
    );
};

export default Todo;