import prisma from '@/db';
import { redirect } from 'next/navigation';
import Link from 'next/link'
import React from 'react'
async function createTodo(data:FormData)
{
"use server"
const title=data.get("title")?.valueOf();
if(typeof title !=="string" || title.length===0)
throw new Error("Invalid Title")
await prisma.todo.create({data:{title,complete:false}})
redirect("/")
}

const page = () => {
    
  return (
  <>
  <header className="flex justify-between items-center m-4">
  <h1 className="text-2xl">New</h1>
  </header>
  <form className='flex gap-2 flex-col m-4' action={createTodo}>
    <input type='txt' name='title' className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100' />
    <div className='flex gap-1 justify-end mr-4'>
    <Link href=".." className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'>Cancel</Link>
    <button type='submit' className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'>Create</button>
    </div>
  </form>

  </>
  )
}

export default page