/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">Członkowie WRSS</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#pablo"
                      >
                        Zarząd
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 5
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 5)}
                        href="#pablo"
                      >
                        Social Media
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 6
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 6)}
                        href="#pablo"
                      >
                        Sponsoring
                    </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 7
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 7)}
                        href="#pablo"
                      >
                        Inne
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                        <Row>
                          <Col sm="3" xs="6">
                            <img
                              alt="..."
                              className="img-fluid rounded shadow"
                              src={require("assets/img/Pazik.JPG")}
                              style={{ width: "150px", height: "150px"}}
                            />
                            <p> Przewo Damian Pazik </p>
                          </Col>
                          <Col sm="3" xs="6">
                            <img
                              alt="..."
                              className="img-fluid rounded shadow"
                              src={require("assets/img/Gosia.JPG")}
                              style={{ width: "150px", height: "150px" }}
                            />
                            <p> Vice Małgorzata Sosin </p>
                          </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="link5">
                      <p>
                        Tu będą fotki
                      </p>
                    </TabPane>
                    <TabPane tabId="link6">
                      <p>
                        Tu też
                      </p>
                    </TabPane>
                   <TabPane tabId="link7">
                      <p>
                        Ile razy jeszcze zmienisz te zakładki?!
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
