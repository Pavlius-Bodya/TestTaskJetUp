import {useSelector} from 'react-redux'
import { DictionaryForm } from '../Components/DictionaryForm'

export const Main = () => {
    
  const dictionary=useSelector(state=>state)
  return (
    <>
      <DictionaryForm dictionary={dictionary}/>
    </>
  )
}
