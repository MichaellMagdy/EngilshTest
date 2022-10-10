import { process } from 'ipaddr.js'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import {motion} from 'framer-motion'



const Navbar = () => {
    return (
        <motion.div className='Navbar'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}>
            <Link to={`/`}>
                <motion.img
                    whileHover={{ scale: 1.1}}
                    transition={{ duration: 1.5, type: 'spring' }}
                    src={process.env.PUBLIC_URL + `/assets/nagwa.png`} alt='' />
            </Link>
        </motion.div>
    )
}

export default Navbar
