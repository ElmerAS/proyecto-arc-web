import React from 'react'
import Container from 'react-bootstrap/Container';
import './style.css'

const SimpleArticle = (props) => {
  return (
    <Container fluid className='px-0'>
      <header>
        {props.children[0]}
      </header>
      <section className='container my-5'>
        <div className='row'>
          <article className='col-12 my-auto'>
            {props.children[1]}
          </article>
        </div>
      </section>
      <footer className='col-12 bg-body-tertiary copyright'>
        {props.children[2]}
        <p>Page made with ❤️ by <a href="https://elmeras.github.io">ElmerAS</a><br/>Copyright &copy; 2023</p>
      </footer>
    </Container>
  )
}

SimpleArticle.sections = ['header', 'main', 'footer']

export default SimpleArticle