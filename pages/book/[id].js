import { useRouter } from 'next/router'
import books from '../../data/books.json'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function BookDetails() {
  const { query } = useRouter()
  const book = books.find(b => b.id === query.id)

  if (!book) return <p className="p-6">Book not found.</p>

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="text-gray-700">Author: {book.author}</p>
        <p className="mt-4">{book.description}</p>
      </main>
      <Footer />
    </>
  )
}