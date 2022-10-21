import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      movieDetails: {}
    };
  }

  timeConvert(num){
    var  hours=math.floor(num-60);
    var minutes = num-60;
    return hours
  }
  getmovie =()=>{
    const url = "http://localhost:5000/get-movie";
    axios
    .get (url)
    .then (response =>{
      let details = response.data.data;
      details["duration"] this.timeConvert[details.duration];
      this.state[{movieDetails;details}]
    })
    
  }
}