import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import {useAppContext} from 'fusion:context'


function PostList() {
  const { globalContent } = useAppContext();
  
  const formatDateTime = (date) => {
    return date?new Date(date).toLocaleString('es-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' , hour12: true, hour: "2-digit", minute: "2-digit"}):""
  }

  if (!globalContent.content_elements || globalContent.content_elements.length <= 0) return null;

  return (
    <Container>
      <h1 className='mb-3'>Noticias</h1>
      {globalContent?.content_elements?.map((item,idk) => {
        return (
          <a href={`/pf/story${item.canonical_url}?_website=rpalatam`} key={idk} className="d-flex mb-3 col-md-8 col-12">
            <Card style={{width:"100%"}}>
              <Row className="g-0">
                <Col className="col-md-4 p-3 align-items-center">
                  <picture>
                    <img src={item.promo_items?.basic?.url || "https://sandbox.rpalatam.arcpublishing.com/resizer/ToZ-9wbeVzKA-J9Z__42Xn-B114=/fit-in/274x183/filters:quality(70):fill(white):background_color(white)/static.themebuilder.aws.arc.pub/rpalatam-sandbox/1690403229534.png"} className="img-fluid rounded-start" alt={item.headlines?.basic} width="274" height="183" loading="lazy"/>
                  </picture>
                </Col>
                <Col className="col-md-6 col-12 align-items-center p-3">
                  <Card.Body>
                    <Card.Title>{item.headlines?.basic}</Card.Title>
                    <Card.Text>
                      {item.description?.basic||item.subheadlines?.basic}
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">{formatDateTime(item.display_date)}</small>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </a>
        )
      })}
    </Container>
  )
}

PostList.label = 'Post List'
export default PostList