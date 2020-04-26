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

import PropTypes from "prop-types";

// reactstrap components
import {Container, Navbar, NavbarBrand} from "reactstrap";

export default function DropDownTable(props) {

    const {a, b, colorA, colorB} = props;

    let answerColor = colorA;
    let questionColor = colorB;


    if (colorA === undefined) answerColor = "navbar-transparent";
    if (colorB === undefined) questionColor = "bg-info";


    const rowItem = <RowItem q={a} a={b} answerColor={answerColor} questionColor={questionColor}/>;

    return (
        <div>{rowItem}</div>
    );
}

DropDownTable.defaultProp = {
    colorA: "navbar-transparent",
    colorB: "bg-info"
};

DropDownTable.propTypes = {
    colorA: PropTypes.oneOf([
        "navbar-transparent",
        "bg-danger",
        "bg-warning",
        "bg-success",
        "bg-info",
        "bg-primary"
    ]),
    colorB: PropTypes.oneOf([
        "navbar-transparent",
        "bg-danger",
        "bg-warning",
        "bg-success",
        "bg-info",
        "bg-primary"
    ]),
    a: PropTypes.string,
    b: PropTypes.string
};

class RowItem extends React.Component {

    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    toggleRow(e) {
        console.log('toggleRow');

        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <Navbar className={this.props.questionColor} expand="lg"
                        style={{cursor: "pointer", marginBottom: "0px", marginTop: "20px"}}
                        onClick={this.toggleRow.bind(this)}>
                    <Container>
                        <div className="navbar-translate">
                            <NavbarBrand href="#pablo">
                                {this.props.q}
                            </NavbarBrand>
                        </div>
                    </Container>
                </Navbar>
                {this.state.open === true ? (
                    <Navbar className={this.props.answerColor} expand="lg">
                        <Container>
                            <div className="text-muted" style={{textAlign: "justify"}}>
                                {this.props.a}
                            </div>
                        </Container>
                    </Navbar>
                ) : (<p></p>
                )}
            </div>
        )
    }
}

