import { useState } from 'react'
import {useDispatch} from 'react-redux'

export const InputForm = () => {
  const [dictionary, setDictionary] = useState({
    word: '',
    translateWord:'',
  })
    const dispatch = useDispatch()
    
    const addWords = () => {
      dispatch({
        type: 'ADD_WORD',
        payload: {
          ...dictionary,id:Date.now(),isActive:false
        }
      })
    
  }
  const handleAddWord = () => {
    if (dictionary.word !== '' && dictionary.translateWord !== '') {
            addWords()
            setDictionary({ word:'',translateWord:''})
    }
  }
  return (
    <div className='InputContainer'>
        <div className='InputForm'>
          <input value={dictionary.word} placeholder='Введіть слова' type='text' onChange={(e)=>setDictionary({...dictionary, word:e.target.value})}/>
          <input value={dictionary.translateWord} placeholder='Введіть переклад' type='text' onChange={(e) => setDictionary({...dictionary,translateWord:e.target.value})} />
        <button className='Btn' onClick={handleAddWord}>Добавити слово</button>
        
        
        </div>
    </div>
  )
}
