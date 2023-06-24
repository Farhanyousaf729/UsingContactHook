import Image from 'next/image'
import { AiOutlinePlusSquare, AiOutlineEdit, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import { RiDeleteBinFill } from "react-icons/ri"
import { useState, useContext } from 'react'
import { AppContext } from './contaxt'
import Todos from './todos'
import Link from 'next/link'

type obj = {
  [key: string | number]: string | number
}
export default function Home() {

  const [toggle, setToggle] = useState(true)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const [myState, setMystate] = useState({} as obj)
  const handleOnChange = (e: any) => {
    setMystate({ ...myState, [e.target.name]: e.target.value })
  }

  const usecontext = useContext(AppContext)

  const handleadd = (e: any) => {
    e.preventDefault()
    usecontext.setstate({...usecontext, empty: [...usecontext.empty, myState] })

    setToggle(!toggle)
  }
  const handleDel = (i: any) => {

    let x = usecontext.empty
    x.splice(i, 1)
    usecontext.setstate({ empty: [...x] })


  }
  console.log(usecontext);


  return (
    <div className='max-w-[120rem] mx-auto min-h-[1rem] '>
      <h1 className='text-center text-5xl font-bold'>MY TODO'S </h1>
      <h1 className='flex items-center justify-center py-4 text-2xl font-semibold '>ADD<AiOutlinePlusSquare data-te-toggle="tooltip" title='Add' onClick={handleToggle} /></h1>
      {
        toggle ? <table className=' w-[90%] mx-auto bg-yellow-300 border-[3px] border-black'>
          <thead >
            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              usecontext.empty ?
                usecontext.empty.map((ele: obj, i: any) => {

                  return (
                    <tr className='text-center border-[1px] border-black '>
                      <td>{i + 1}</td>
                      <td>{ele.name}</td>
                      <td className='flex justify-around' ><AiOutlineEdit data-te-toggle="tooltip" title='Edit' /><AiOutlineArrowUp data-te-toggle="tooltip" title='Up' /><AiOutlineArrowDown data-te-toggle="tooltip" title='Down' /> < RiDeleteBinFill onClick={() => { handleDel(i) }} data-te-toggle="tooltip" title='Delet' /></td>
                    </tr>
                  )
                }) : <></>
            }


          </tbody>
        </table> :
          <form className=' flex flex-col items-center border-red-500 max-w-[95%] mx-auto bg-blue-300 px-4 ' onSubmit={handleadd}  >
            <AiOutlinePlusSquare onClick={() => { setToggle(!toggle) }} className='self-end text-2xl' />
            <input className=' w-[100%] rounded-lg p-2 outline-none mt-2' type="text" placeholder='Name' name='name' value={myState.name} onChange={handleOnChange} />
            <input className=' w-[100%] rounded-lg p-2 outline-none mt-2' type="email" placeholder='Email' name='email' value={myState.email} onChange={handleOnChange} />
            <input className=' w-[100%] rounded-lg p-2 outline-none m-2' type="password" placeholder='Password' name='passward' value={myState.passward} onChange={handleOnChange} />
            <input className='w-[100%]  bg-blue-500 rounded-lg m-2 outline-none font-bold p-[3px] text-2xl' type="submit" />
          </form>

      }



    </div>
  )
}
