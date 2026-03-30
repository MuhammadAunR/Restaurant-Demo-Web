const ButtonUi = ({ text }) => {

  return (
    <button className="relative uppercase font-heading font-semibold tracking-wide text-lg px-5 py-2 group cursor-pointer overflow-hidden transition-all duration-300 ease-linear text-primary bg-primary/20 hover:bg-transparent">

      <span className="absolute top-0 left-0 h-full w-0.5 bg-current"></span>
      <span className="absolute top-0 right-0 h-full w-0.5 bg-current"></span>

      <span className="absolute top-0 left-0 h-0.5 w-1/2 bg-current"></span>
      <span className="absolute top-0 right-0 h-0.5 w-0 bg-current group-hover:w-1/2 transition-all duration-300 ease-out"></span>

      <span className="absolute bottom-0 right-0 h-0.5 w-1/2 bg-current"></span>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current group-hover:w-1/2 transition-all duration-300 ease-out"></span>

      <span className="relative z-10">{text}</span>

    </button>
  )
}

export default ButtonUi