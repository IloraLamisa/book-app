import { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', description: '' })
  const router = useRouter()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Book added (mocked)')
    router.push('/')
  }

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="title" placeholder="Title" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input name="author" placeholder="Author" onChange={handleChange} className="w-full p-2 border rounded" required />
          <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Book</button>
        </form>
      </main>
      <Footer />
    </>
  )
}