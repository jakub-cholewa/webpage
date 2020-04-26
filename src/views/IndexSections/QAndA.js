/*!

=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import DropDownTable from "components/DropDownTable/DropDownTable";
import dataPL from "assets/text/DropDownTableDataInput/DropDownTableDataInput__pl.js";
import dataANG from "assets/text/DropDownTableDataInput/DropDownTableDataInput__ang.js";
import {FormGroup, Input} from "reactstrap";
import Container from "reactstrap/es/Container";


class QAndA extends React.Component {

    constructor() {
        super();

        this.state = {
            search: ""
        };
    }

    searchFunc = (event) => {
        let keyword = event.target.value;
        this.setState({search: keyword})
    }


    render() {

        let data = this.props.lang === "pl" ? dataPL : dataANG;

        let items = data.filter((item) => {
            if (this.state.search == "")
                return item
            else if (item.tags.map(tag => tag.toLowerCase()).some(tag => this.state.search.toLowerCase().includes(tag)))
                return item
        }).map((item, idx) =>
            <DropDownTable
                colorA={item.answerColor}
                colorB={item.questionColor}
                a={item.question}
                b={item.answer}
            />
        );

        return (
            <div className="section section-navbars">

                <Container>
                    <FormGroup>
                        <Input defaultValue="" placeholder="Regular" type="text" onChange={(e) => this.searchFunc(e)}/>
                    </FormGroup>
                </Container>
                <div id="navbar">
                    <div className="qa-example">

                        {items}

                    </div>
                </div>
            </div>
        );
    }
}


export default QAndA;

