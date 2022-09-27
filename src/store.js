import { createStore } from 'redux'

const defaultState = {
    allWords: [
    {
        word: 'Cat',
        translateWord: 'Кіт',
        id:1,
        isActive:false
    },
    {
        word: 'Dog',
        translateWord: 'Собака',
        id:2,
        isActive:false
    },
    {
        word: 'Book',
        translateWord: 'Книга',
        id:3,
        isActive:false
    },
    {
        word: 'Pen',
        translateWord: 'Ручка',
        id:4,
        isActive:false
    },
    {
        word: 'Window',
        translateWord: 'Вікно',
        id:5,
        isActive:false
    },
    {
        word: 'Rain',
        translateWord: 'Дощ',
        id:6,
        isActive:false
    },
    {
        word: 'Sun',
        translateWord: 'Сонце',
        id:7,
        isActive:false
    },
    {
        word: 'Car',
        translateWord: 'Автомобіль',
        id:8,
        isActive:false
    },
    {
        word: 'Ball',
        translateWord: "м'яч",
        id:9,
        isActive:false
    },
    {
        word: 'Apple',
        translateWord: 'Яблуко',
        id:10,
        isActive:false
    },
    {
        word: 'lesson',
        translateWord: 'Урок',
        id:11,
        isActive:false
    },
    
    ],
    testWords:[]
}

function reducerDictionary(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_WORD':
          return {...state,allWords:[...state.allWords,action.payload]}
    case 'CHANGE_WORD':
          return {
              ...state,
              allWords: [...state.allWords.map(item => item.id == action.payload ? { ...item, isActive: !item.isActive } : item)],
              testWords:[...state.allWords.filter(item=>item.isActive)],
          }
    case 'FILTER_WORD':
          return {...state, testWords:[...state.testWords.slice(0,10)]}
    default:
      return state
  }
}


const store = createStore(reducerDictionary)



export default  store