import React, {Component} from 'react';
import {Alert} from 'react-native';
import SideBarContent from './SideBarContent';


export default class SideBar extends Component{

    constructor(props){
        super(props)

        this.state = {
            loadList : [],
        }
    }

    componentDidMount(){

        fetch("https://mplatform.seoul.go.kr/api/dule/courseBaseInfo.do")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                loadList : responseJson.list
            });
        })
        .catch(error => console.log(error));

    }

    render()
    {
        return (
            <SideBarContent 
                locations={this.state.loadList}
            />
        );
    }
}