// components/MovieDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();

  // Gunakan movieId untuk mengambil detail film dari API atau sumber data lainnya
  // Contoh:
  // const movieDetails = fetchMovieDetails(movieId);

  return (
    <div>
      <h2>Movie Details for ID: {movieId}</h2>
      {/* Tampilkan detail film sesuai data yang diperoleh */}
    </div>
  );
};

export default MovieDetails;
