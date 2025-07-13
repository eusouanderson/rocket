import ky from 'ky'

export default ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
})
