import React from 'react';

function Card({ article }) {
    return (
      <div className="w-96 max-w-md mx-auto my-4 justify-center items-center bg-white rounded-lg shadow-md overflow-hidden">
        <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600">{article.author}</p>
          <p className="text-gray-600">{article.publishedAt}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Baca selengkapnya
          </a>
        </div>
      </div>
    );
  }
  

export default Card;
