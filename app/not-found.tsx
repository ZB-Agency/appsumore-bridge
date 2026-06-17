export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
      <h1 className="text-6xl font-black mb-4 text-blue-500">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Lost in Orbit</h2>
      <p className="text-gray-400 mb-8 max-w-sm">The infrastructure you're looking for might have been moved or doesn't exist.</p>
      <a href="/" className="bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-500 transition">
        Return to Safety
      </a>
    </div>
  );
}