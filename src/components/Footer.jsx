function Footer() {
    return (
      <footer style={{
        backgroundColor: '#003366',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <p>&copy; {new Date().getFullYear()} Swathi Sri Residency. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  