import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'

export const DictionaryForm = ({ dictionary }) => {

  
  
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handlerClick = () => {
    dispatch({
      type: 'FILTER_WORD',
    })
    navigate("/test");
  }

  const changeHandler = (id) => {
    dispatch({
      type: 'CHANGE_WORD',
      payload:id
   })

  }
  console.log(dictionary)

  

   
  return (
    <>
      
      <div className='Container'>
        
        <button className='Btn' type='button' disabled={dictionary.testWords.length !=10} onClick={handlerClick} >Повторити слова</button>
        
      </div>
      <div className='DictionaryContainer'>
        <div className='Title'>
          <h1 >Слово</h1>
          <h1>Переклад</h1>
        </div>
      
      
        {dictionary.allWords.map((element,index) => {
              return (
              <div className='WordContainer' key={index}>
                  <label>
                    <input type="checkbox" className='filled-in' checked={element.isActive} onChange={()=>changeHandler(element.id)}/>
                    <span className='SpanText'>{ element.word}</span>
                  </label>
                  <div>{element.translateWord}</div>
              </div>
              )
        })}
      </div>
    </>
  )
}