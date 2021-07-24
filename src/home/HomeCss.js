import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import MyColors from './MyColors';
import {getWight} from './Utils';

/**
 * @Author Manh Tai
 * @Date 24-07-2021
 * */

const style = StyleSheet.create({
    container: {
    },
    imageBg: {
        width: '100%',
        height: 750,
        position:'absolute',
    },
    com1: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 16,

    }, textWhite: {
        color: Colors.white,
        fontWeight: 'bold',

        fontSize: 16,
    }, textWhite12: {
        color: Colors.white,
        fontSize: 13,
    }, textWhite15: {
        color: Colors.white,
        fontSize: 15,
    }, textOrange15: {
        color: MyColors.yellow,
        fontSize: 15,
        fontWeight: 'bold',
    }, textOrange13: {
        color: MyColors.yellow,
        fontSize: 13,
    }, com11: {
        paddingLeft: 8,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    }, com2: {
        width: '100%',
    }, com0: {
        flexDirection: 'column',
        width: '100%',
        // position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        flex: 1,
        top: 0,
        left: 0,
    }, com3: {
        width: '100%',
        height: getWight() / 2,
        backgroundColor: Colors.white,
        padding: 16,
        marginVertical: 16,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 16,
        elevation: 4,

    }, com31: {
        flex: 1,

        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    }, com311: {
        width: getWight() / 8,
        height: getWight() / 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 16,
        elevation: 4,
        borderRadius: 16,
        padding: 2,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: MyColors.c_orange,
        justifyContent: 'center',
        alignItems: 'center',
    }, com4: {
        backgroundColor: MyColors.oceanBlue,
        flexDirection:'row',
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 16,
    }, com421: {
        backgroundColor: MyColors.c_orange,
        padding: 4,
        borderRadius:8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 2,
    }, com5: {
        flexDirection:'row',
        paddingVertical: 8

    }, com51: {
        flex: 1,
        color: MyColors.c_primary,
        fontSize: 18,
    }, com61: {
        justifyContent: 'center',
        alignItems: 'center',
        margin:4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 16,
        elevation: 4,
        borderRadius: 16,
        backgroundColor: '#ffffff',

    }, com71: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 100,
        elevation: 4,
        borderRadius: 100,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: MyColors.c_orange,
        justifyContent: 'center',
        alignItems: 'center',
        // width:'50%',
        flex: 1,
        marginTop:16
    }, appbar: {
        backgroundColor:Colors.white,
        height:50,
        width:getWight(),
        position: 'absolute',
        zIndex:5,
        top: 0,
        flexDirection:'row'
    }, item_app_bar:
{flex: 1,
    justifyContent:'center',
    alignItems:'center',
    },


});


export default style;
