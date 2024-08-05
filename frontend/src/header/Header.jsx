import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/1574181/pexels-photo-1574181.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="headerImg" />
    </div>
  )
}

export default Header