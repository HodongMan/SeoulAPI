import React, {Component} from 'react';
import {Text,View} from 'react-native';


export default class SideBarContent extends Component{

    render()
    {
        return(
            <View>
                {this.props.locations.map((item, index) => {
                    return(<Text key={index}>{item.COURSE_NM}</Text>)
                })}
                
            </View>
        );
    }
}