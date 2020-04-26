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


class QAndA extends React.Component {


    constructor(){
        super();

        this.state ={
            search:null
        };

    }

    render() {

        let data = this.props.lang === "pl" ? dataPL : dataANG;

        let items = data.map((item, idx) =>
            <DropDownTable
                colorA={item.answerColor}
                colorB={item.questionColor}
                a={item.question}
                b={item.answer}
            />
        );

        return (

            <div className="section section-navbars">
                <FormGroup>
                    <Input defaultValue="" placeholder="Regular" type="text" />
                </FormGroup>

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

