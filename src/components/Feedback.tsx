import React, { useState } from 'react';

const Feedback: React.FC = () => {
  const [menuId, setMenuId] = useState('');
  const [rating, setRating] = useState('5');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement feedback submission logic
    console.log('Feedback:', { menuId, rating, comment });
    alert('Feedback submitted successfully!');
    setMenuId('');
    setRating('5');
    setComment('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="menuId" className="block mb-2">Menu Item ID</label>
          <input
            type="text"
            id="menuId"
            value={menuId}
            onChange={(e) => setMenuId(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="comment" className="block mb-2">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;