import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import BgHome from '../images/bg_home.svg';
import Logo from '../images/logo.svg';
import Bell from '../images/bell.svg';
import BannerHome from '../images/banner_home.svg';
import Service from '../images/service.svg';
import Circle from '../images/arrow_circle_2.svg';
import Feedback from '../images/feedback.svg';
import Vote from '../images/vote.svg';
import style from './HomeCss';
import IconHome from '../images/home.svg';
import IconProfile from '../images/folder.svg';
import IconAppointment from '../images/calendar.svg';
import IconAccount from '../images/account.svg';

import MyColors from './MyColors';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';


function HomeScreen() {
    const [isShow, setShow] = useState(false);

    function handleScroll(event: Object) {
        console.log(event.nativeEvent.contentOffset.y);
        event.nativeEvent.contentOffset.y > 300 ? setShow(true) : setShow(false);
        console.log(isShow);
    }

    return (
        <View style={{flex: 1}}>
            {
                isShow ? <View style={style.appbar}>
                    <View style={style.item_app_bar}>
                        <Service width={20} height={20}/>
                    </View>
                    <View style={style.item_app_bar}>
                        <Service width={20} height={20}/>
                    </View>
                    <View style={style.item_app_bar}>
                        <Service width={20} height={20}/>
                    </View>
                    <View style={style.item_app_bar}>
                        <Service width={20} height={20}/>
                    </View>
                    <View style={style.item_app_bar}>
                        <Service width={20} height={20}/>
                    </View>
                    <View style={style.item_app_bar}>
                        <Service width={20} height={20}/>
                    </View>

                </View> : <View style={{width: 0, height: 0}}/>
            }
            <ScrollView
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}} scrollEnabled
                style={{flex: 1}}>
                <BgHome style={style.imageBg}/>
                <ScrollView
                    contentContainerStyle={{flexGrow: 1}} scrollEnabled>
                    <View style={style.com0}>
                        <View style={style.com1}>
                            <Logo width={50}/>
                            <View style={style.com11}>
                                <Text style={style.textWhite}>VIETSING INTERNATIONAL CLINNIC</Text>
                                <Text style={style.textWhite12}>Khám bệnh bằng đức và sự thấu cảm</Text>
                            </View>
                            <Bell width={20}/>
                        </View>
                        <BannerHome style={style.com2}/>
                        <View style={style.com3}>
                            <View style={{flexDirection: 'row', height: '50%'}}>
                                <TouchableHighlight style={style.com31}
                                                    onPress={() => null}
                                                    underlayColor={MyColors.splash}
                                                    activeOpacity={0.6}>
                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={style.com311}>
                                            <Service width={30} height={30}/>
                                        </View>
                                        <View style={{height: 8}}/>
                                        <Text>Dịch vụ</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight style={style.com31}
                                                    onPress={() => null}
                                                    underlayColor={MyColors.splash}
                                                    activeOpacity={0.6}>
                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={style.com311}>
                                            <Service width={30} height={30}/>
                                        </View>
                                        <View style={{height: 8}}/>
                                        <Text>Lịch hẹn</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight style={style.com31}
                                                    onPress={() => null}
                                                    underlayColor={MyColors.splash}
                                                    activeOpacity={0.6}>
                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={style.com311}>
                                            <Service width={30} height={30}/>
                                        </View>
                                        <View style={{height: 8}}/>
                                        <Text>Liên hệ</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            {/*-------------------------------------------------------*/}
                            <View style={{flexDirection: 'row', height: '50%'}}>
                                <TouchableHighlight style={style.com31}
                                                    onPress={() => null}
                                                    underlayColor={MyColors.splash}
                                                    activeOpacity={0.6}>
                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={style.com311}>
                                            <Service width={30} height={30}/>
                                        </View>
                                        <View style={{height: 8}}/>
                                        <Text>Dịch vụ</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight style={style.com31}
                                                    onPress={() => null}
                                                    underlayColor={MyColors.splash}
                                                    activeOpacity={0.6}>
                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={style.com311}>
                                            <Service width={30} height={30}/>
                                        </View>
                                        <View style={{height: 8}}/>
                                        <Text>Lịch hẹn</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight style={style.com31}
                                                    onPress={() => null}
                                                    underlayColor={MyColors.splash}
                                                    activeOpacity={0.6}>
                                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={style.com311}>
                                            <Service width={30} height={30}/>
                                        </View>
                                        <View style={{height: 8}}/>
                                        <Text>Liên hệ</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                        {/*---------------------------------------------------------------------*/}
                        <View style={style.com4}>
                            <View style={{flex: 1}}>
                                <Text style={style.textOrange15} numberOfLines={1}>LÀM VIỆC TẤT CẢ CÁC NGÀY TRONG TUẦN</Text>
                                <Text style={style.textWhite12}>Sáng: Time Chiều: Time</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={style.textWhite12}>Hotline: </Text>
                                    <Text style={style.textOrange13}>(+84)243 943 8888</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={style.textWhite12}>Email: </Text>
                                    <Text style={style.textOrange13}>info@vietsingclinnic.com.vn</Text>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center', padding: 8}}>
                                <TouchableOpacity style={style.com421}>
                                    <Text style={{color: Colors.white, fontWeight: 'bold'}}>ĐẶT LỊCH HẸN</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/*    -----------------------------------------------*/}
                        <View style={style.com5}>
                            <Text style={style.com51}>PHÒNG KHÁM QUỐC TẾ VIETSING</Text>
                            <Circle width={20} height={20}/>
                        </View>
                        <View style={{width: '100%'}}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={[{key: 'Devin'},
                                    {key: 'Dan'},
                                    {key: 'Dominic'},
                                    {key: 'Jackson'},
                                    {key: 'James'},
                                    {key: 'Joel'},
                                    {key: 'John'},
                                    {key: 'Jillian'},
                                    {key: 'Jimmy'},
                                    {key: 'Julie'},
                                ]}
                                renderItem={
                                    ({item}) =>
                                        <View style={style.com61}>
                                            <Image style={{width: 200, height: 120, borderTopLeftRadius: 32, borderTopRightRadius: 32}}
                                                   resizeMode={'stretch'}
                                                   source={{uri: 'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg'}}/>

                                            <Text numberOfLines={2} style={{width: 200, padding: 8}}>Chuỗi phòng khám hàng đầu tại Việt nam mang thương hiệu Việt nam</Text>
                                        </View>

                                }
                            />
                        </View>
                        {/*    --------------------------------------------------*/}
                        <View style={style.com5}>
                            <Text style={style.com51}>DỊCH VỤ</Text>
                            <Circle width={20} height={20}/>
                        </View>
                        <View style={{width: '100%'}}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={[{key: 'Devin'},
                                    {key: 'Dan'},
                                    {key: 'Dominic'},
                                    {key: 'Jackson'},
                                    {key: 'James'},
                                    {key: 'Joel'},
                                    {key: 'John'},
                                    {key: 'Jillian'},
                                    {key: 'Jimmy'},
                                    {key: 'Julie'},
                                ]}
                                renderItem={
                                    ({item}) =>
                                        <View style={style.com61}>
                                            <Image style={{width: 200, height: 120, borderTopLeftRadius: 32, borderTopRightRadius: 32}}
                                                   resizeMode={'stretch'}
                                                   source={{uri: 'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg'}}/>

                                            <Text numberOfLines={2} style={{width: 200, padding: 8}}>Chuỗi phòng khám hàng đầu tại Việt nam mang thương hiệu Việt nam</Text>
                                        </View>

                                }
                            />
                        </View>
                        {/*    --------------------------------------------------*/}
                        <View style={style.com5}>
                            <Text style={style.com51}>ƯU ĐÃI</Text>
                            <Circle width={20} height={20}/>
                        </View>
                        <View style={{width: '100%'}}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={[{key: 'Devin'},
                                    {key: 'Dan'},
                                    {key: 'Dominic'},
                                    {key: 'Jackson'},
                                    {key: 'James'},
                                    {key: 'Joel'},
                                    {key: 'John'},
                                    {key: 'Jillian'},
                                    {key: 'Jimmy'},
                                    {key: 'Julie'},
                                ]}
                                renderItem={
                                    ({item}) =>
                                        <View style={style.com61}>
                                            <Image style={{width: 200, height: 120, borderTopLeftRadius: 32, borderTopRightRadius: 32}}
                                                   resizeMode={'stretch'}
                                                   source={{uri: 'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg'}}/>

                                            <Text numberOfLines={2} style={{width: 200, padding: 8}}>Chuỗi phòng khám hàng đầu tại Việt nam mang thương hiệu Việt nam</Text>
                                        </View>

                                }
                            />
                        </View>
                        {/*    --------------------------------------------------*/}
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={style.com71}>
                                <View style={{flexDirection: 'row'}}>
                                    <Feedback width={20} height={20}/>
                                    <View style={{width: 8}}/>
                                    <Text numberOfLines={1}>Phản hổi về ứng dụng</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{width: 16}}/>
                            <TouchableOpacity style={style.com71}>
                                <View style={{flexDirection: 'row'}}>
                                    <Vote width={20} height={20}/>
                                    <View style={{width: 8}}/>
                                    <Text numberOfLines={1}>Đánh giá về dịch vụ</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{height: 16}}/>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>COPYRIGHT 2021</Text>
                            <Text>Phòng khám đa khoa quốc tế VIETSING</Text>
                        </View>
                        <View style={{height: 32}}/>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    );
}


export default HomeScreen;
