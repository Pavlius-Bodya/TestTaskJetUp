import { useState } from "react"
import { useSelector } from "react-redux"
export const TestForm = () => {
  const [dictionaryForTest, setDictionaryForTest] = useState()
  const [activeTest, setActiveTest] = useState(false)
  const [currentQuestions, setCurrentQuestions] = useState(0)
  const [result, setResult] = useState(0)
  const[showResult,setShowResult]=useState(false)
  
  
  const dictionary = useSelector(state => state)
  const { allWords, testWords } = dictionary

  const formatterArray = array => {
    return array.reduce((acc,curr) => {
    const selectArray = [curr, ...[1,2,3].map((_) => array[Math.floor(Math.random() * 9)])]
    return ([...acc, {
      word: curr.word,
      data: selectArray.sort(() => Math.random() - 0.5),
     }
    ])
    },[])
  }
  const doTestWords = (arr) => {
    const dataWords = formatterArray(arr)
    setDictionaryForTest(dataWords)
    setActiveTest(true)
    setShowResult(false)
    
  }
  const handlerClick = (word, answer) => {
    testWords.map(item => {
      if (item.word == word) {
        if (item.translateWord == answer) {
          setResult(prev=>prev+10)
        }
      }
    })
    if (currentQuestions < dictionaryForTest.length-1) {
      setCurrentQuestions(prev=>prev+1)
    } else {
      setShowResult(true)
    }
  }
  
  
    
  return (
    <div className="Test">
      {!activeTest && <button className="Btn mrt" onClick={() => doTestWords(testWords)}>Почати тест</button>}
      {activeTest&&<div>
        {(activeTest&&!showResult) ?
        <div className="TestContainer">
          <div className="TestForm">
              <div className="Question">{dictionaryForTest[currentQuestions].word}</div>
            <div className="AnswerFrom">
              <label>
                <input type="checkbox" checked={false} onChange={()=>handlerClick(dictionaryForTest[currentQuestions].word,dictionaryForTest[currentQuestions].data[0].translateWord)}/>
                <span className='Answer'>{dictionaryForTest[currentQuestions].data[0].translateWord}</span>
              </label>
              <label>
                <input type="checkbox"  checked={false} onChange={()=>handlerClick(dictionaryForTest[currentQuestions].word,dictionaryForTest[currentQuestions].data[1].translateWord)}/>
                <span className='Answer' >{dictionaryForTest[currentQuestions].data[1].translateWord}</span>
              </label>
            </div>
            <div className="AnswerFrom">
              <label>
                <input type="checkbox"  checked={false} onChange={()=>handlerClick(dictionaryForTest[currentQuestions].word,dictionaryForTest[currentQuestions].data[2].translateWord)}/>
                <span className='Answer'>{dictionaryForTest[currentQuestions].data[2].translateWord}</span>
              </label>
              <label>
                <input type="checkbox"  checked={false} onChange={()=>handlerClick(dictionaryForTest[currentQuestions].word,dictionaryForTest[currentQuestions].data[3].translateWord)}/>
                <span className='Answer'>{dictionaryForTest[currentQuestions].data[3].translateWord}</span>
              </label>
            </div>

          </div>
          </div> :
          <div className="TestContainer">
            <div className="ResultForm">
              <div>Ваш результат:</div>
              <div>{result}%</div>
            </div>
          </div>
        }
      </div>
      }
    </div>  
  )
}
