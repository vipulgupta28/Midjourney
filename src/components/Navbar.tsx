import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-10 py-4 flex justify-between items-center bg-black text-white sticky top-0 z-50"
    >
      {/* Logo */}
      <Link
      to= "navbar"
      smooth={true}
      duration={600}
      offset={-80} // adjust for sticky navbar height
      className="relative z-10 p-3 "
    >
      <div className="text-4xl font-bold tracking-wider hover:cursor-pointer">
        Mid<span className="text-gray-400">Journey</span>
      </div>
      </Link>

      {/* Center Navigation */}
      <div id="navbar" className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
  {["About", "Showcase", "Updates", "FAQ", "Contact"].map((link) => {
  const href = `#${link.toLowerCase()}`;
  return (
    <motion.a
      key={link}
      href={href}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative hover:cursor-none px-4 py-2 rounded-xl overflow-hidden"
    >

      <Link
      to={link.toLowerCase()} // id of the section
      smooth={true}
      duration={600}
      offset={-80} // adjust for sticky navbar height
      className="relative z-10 p-3 "
    >
      {link}
    </Link>
      
      
      <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-xl z-0"></span>
    </motion.a>
  );
})}

</div>


      {/* Right Buttons */}
      <div className="flex items-center gap-6">
        <button className="text-sm text-yellow-300 font-semibold uppercase tracking-wider">
          Sign In
        </button>
        <button className="bg-lime-400 hover:bg-lime-300 text-black px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300">
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
