import React from 'react';
import {Text, View, TouchableOpacity, Stylesheet} from 'react-native'
import {Dimensions} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import SwipeableFlatList from "../Components/SwipeableFlatList";
import {MyHeader} from '../Components/Myheader'
import db from '../Config';
import firebase from 'firebase';

export default class NotificationsScren extends React.Components{
    constructor(props){
        super(props)
        this.state = {
            userID:firebase.auth().currentUser.email,
            allNotifications:[]
        }
        this.Notification = null
    }
    render(){
        return(
            <View style ={{flex:1}}>
                <View style = {{flex:0.1}}>
                    <MyHeader title = {"NOTIFICATIONS SCREEN"} navigation = {this.props.navigation}/>
                </View>
                <View style = {{flex:0.9}}>
                    {
                        this.state.allNotifications.length === 0?(
                            
                        ):()
                    }

                </View>
            </View>
        )
    }
}