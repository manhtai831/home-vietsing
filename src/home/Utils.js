import React from 'react';
import {Dimensions} from 'react-native';

/**
 * @Author Manh Tai
 * @Date 24-07-2021
 * */


export function getHeight() {
    return Dimensions.get('window').height
}
export function getWight() {
    return Dimensions.get('window').width
}


