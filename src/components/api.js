import React, { Component} from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Card, Col, Row } from 'antd';
import Search from "../elements/Input";

const { Meta } = Card;

export default class api extends Component {
    constructor(props) {

        super(props);
        this.state = {
            api: [],
            allApi: [],
            visible: false,
        };
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "https://www.breakingbadapi.com/api/characters",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data); 
                this.setState({
                    api: data.data,
                    allApi: data.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    _onKeyUp = e => {
		// filter post list by title using onKeyUp function
		const api = this.state.allApi.filter(item =>
			item.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        this.setState({ api });

	};

    render() {
        
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <Search placeholder="Cari Karakter" size="2em" onChange={this._onKeyUp} />
                        <h1>KARAKTER FILM BREAKING BAD</h1>
                    </center>
                    <div className="site-card-wrapper container">
                    <Row gutter={16}>

                    {this.state.api.map((results, index) => {
                        return (
                              <Col span={6}>
                              <Card
                                hoverable
                                shadow={4} 
                                style={{ minWidth: '300', margin: 'auto' }}
                                cover={
                                <img
                                    alt="example"
                                    src= {results.img}
                                    style={{height: '450px'}}
                                />
                                }
                                actions={[
                                <p>{results.nickname}</p>,
                                <p>{results.status}</p>,
                                ]}
                              >
                                <Meta
                                title={results.name}
                                style={{textAlign: 'center'}}
                                />
                              </Card>
                              </Col>
                        );
                    })}
                    </Row>
                    </div>
                </div>
            </div>
        );
    }
}