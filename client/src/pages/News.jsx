import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const News = () => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const pageSize = 9

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY
  const API_URL = `https://newsapi.org/v2/everything?q=wildlife AND animals&sortBy=publishedAt&language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`

  const fetchNews = async () => {
    try {
      const res = await fetch(API_URL)
      const data = await res.json()

      if (data.status === "ok") {
        setArticles(data.articles)
        setTotalResults(data.totalResults)
      }
      else {
        console.log("NewsAPI error : ", data)
      }
    } catch (error) {
      console.log("Error fetching news : ", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [page])

  const totalPages = Math.ceil(totalResults / pageSize)

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-[#074240] to-[#12A8A3] p-6'>
        <motion.h1
          className='text-4xl font-bold text-center text-white py-6'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Wildlife News Wall
        </motion.h1>

        <motion.p
          className='text-lg text-center text-white/80 mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay updated with the latest news on wildlife, conservation, and endangered animals around the world
        </motion.p>

        {
          loading ?
            (
              <p className='text-center text-white/75'>Loading News...</p>
            ) :
            (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                  articles.map((article, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className='bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border'
                    >
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className='w-full h-48 object-cover'
                      />


                      <div className='p-5 flex flex-col flex-grow'>
                        <h2 className='text-lg font-semibold mb-2' style={{ color: "#074240" }}>
                          {article.title}
                        </h2>

                        <p className='text-gray-700 mb-4 flex-grow line-clamp-3'>
                          {article.description || "No description available."}
                        </p>
                        <a
                          href={article.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='mt-auto inline-block px-4 py-2 rounded-lg text-white font-medium transition bg-gradient-to-l from-[#074240] to-[#12A8A3]'
                          onMouseEnter={(e) => (e.target.style.backgroundColor = "#074240")}
                          onMouseLeave={(e) => (e.target.style.backgroundColor = "#12A8A3")}
                        >
                          Read More
                        </a>
                      </div>
                    </motion.div>
                  ))
                }
              </div>
            )
        }

        <div className="flex justify-center items-center gap-4 my-6">
          <button
            className="text-white font-semibold"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-gray-700 font-medium">
            Page {page} of {totalPages}
          </span>
          <button
            className="text-white font-semibold"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>

    </>
  )
}

export default News
