import Navbar from '@/components/Navbar'
import books from '../data/books.json'
import Link from 'next/link'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold mb-6 text-center">📚 Book Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.slice(0, 6).map(book => (
            <div key={book.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-3xl font-semibold text-gray-800">{book.title}</h2>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <p className="text-sm text-gray-500">{book.description}</p>
              <Link
                href={`/books/${book.id}`}
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}