const Footer = () => {  
  const today = new Date();
  return (
    <footer className="main-footer">
        <p className="text-center py-4" style={{color: 'green'}}>
            Simple Grocery List &copy; {today.getFullYear()}
        </p>
    </footer>
  )
}

export default Footer;