const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center flex gap-2">
        <p className="text-sm font-black">&copy; {currentYear}</p>
        <p className="text-sm font-bold">
          Hecho con <span className="text-red-500">❤️</span> por Jose A. Canto
        </p>
      </div>
    </footer>
  )
}

export default Footer
