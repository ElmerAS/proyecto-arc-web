import React from 'react'
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import getProperties from 'fusion:properties'
import { useAppContext } from 'fusion:context'

function Header(props) {
  const {arcSite} = useAppContext();
  const {websiteName} = getProperties(arcSite);
  const { customFields: { hierarchyConfig = {} } } = props;
  const { contentService, contentConfigValues } = hierarchyConfig;

  const hierarchy = useContent({
    source: contentService,
    query: contentConfigValues,
  });

  if (!hierarchy) return null;

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed>
      <Container fluid>
        <Navbar.Brand href="/pf/home/?_website=rpalatam" className='d-flex align-items-center'><img alt="" src="https://rpalatam.com.pe/wp-content/uploads/2023/05/Logotipo-RPA.png" height="30" className="d-inline-block align-top" style={{maxWidth: "60px",filter: "invert(0.5)", height: "80px", objectFit: "cover", objectPosition: "left" }} /> <span style={{fontWeight:700}}>{websiteName}</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {hierarchy.children.map((item,idk) => {
              if (item.children.length > 0) {
                return (
                  <NavDropdown title={item.name} id="basic-nav-dropdown" key={idk}>
                    {item.children.map((child,idkc) => {return <NavDropdown.Item href= {child.url} key={idkc}>{child.display_name}</NavDropdown.Item>})}
                  </NavDropdown>
                )
              } else {
                return <Nav.Link href={`/pf${item._id}/?_website=rpalatam`} key={idk}>{item.name}</Nav.Link>
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  customFields: PropTypes.shape({
    hierarchyConfig: PropTypes.contentConfig('site-navigation').tag({
      label: 'Hierarchy Data Source',
    }).isRequired,
  }),
};
Header.label = 'Header Bar';
export default Header