 // params.ts

// Ganti BASE_URL dengan URL sesuai dengan kebutuhan Anda
const BASE_URL = "http://localhost:3000";

// Fungsi untuk mendapatkan URL berdasarkan link yang diklik
export const getBioskopUrl = (link: number) => {
  return `${BASE_URL}/bioskop/${link}`;
};
