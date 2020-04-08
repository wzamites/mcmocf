import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center py-3 greyBackground">
        © {new Date().getFullYear()}
      </footer>
    )
  }
}

export default Footer
