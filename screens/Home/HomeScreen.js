import React, { useState, useEffect } from 'react';
import Colors from '../../ultils/Colors';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
//fetch data api
import { MaterialCommunityIcons, AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const HomeScreen = (props) => {
    const { navigation } = props;
    // const [data, setData] = useState({ test: [] });
    // useEffect(async () => {
    //     const response = await fetch('http://10.52.60.76:3000/api/user', {
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-type': 'application/json'
    //         },
    //         method: "GET",
    //         body: JSON.stringify({
    //             name, email, password
    //         })
    //     })
    //     console.log('abc', response);
    // });

    return (
        <SafeAreaView style={styles.containerScroll}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.taskbarbg}>
                        <Text style={styles.Text}>Xin Chào : Kim Hoàn</Text>
                        {/* <TouchableHighlight style={{ borderWidth: 1 }}> */}
                        <ImageBackground blurRadius={0} source={require('../../images/icon.jpg')} style={styles.ImgIcon} />
                        {/* </TouchableHighlight> */}
                    </View>

                    <View style={styles.Taskbar}>
                        <Text><Text style={styles.textbold}>16 </Text>follower</Text>
                        <Text><Text style={styles.textbold}>30 </Text>Post</Text>
                        <Text><Text style={styles.textbold}>20 </Text> Done</Text>
                    </View>
                    <View style={styles.Components}>
                        {/**Post */}
                        <TouchableOpacity style={styles.ComponentChild1}
                            onPress={() => navigation.navigate('AddNewScreen')}>
                            <Entypo name="bookmark" size={22} color="white" style={{ marginBottom: 3 }} />
                            <Text style={styles.TextChild}>Nhập liệu</Text>
                        </TouchableOpacity>
                        {/**Update */}
                        <TouchableOpacity style={styles.ComponentChild2}>
                            <AntDesign name="edit" size={22} color="white" style={{ marginBottom: 3 }} />
                            <Text style={styles.TextChild}>Thay đổi thông tin</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Components}>
                        {/**Get * */}
                        <TouchableOpacity style={styles.ComponentChild3}>
                            <MaterialCommunityIcons name="google-analytics" size={22} color="white" style={{ marginBottom: 3 }} />
                            <Text style={styles.TextChild}>Thống kê</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ComponentChild4}>
                            <AntDesign name="areachart" size={22} color="white" style={{ marginBottom: 3 }} />
                            <Text style={styles.TextChild}>Thông tin biểu đồ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Components}>
                        <TouchableOpacity style={styles.ComponentChild5}>
                            <AntDesign name="piechart" size={22} color="white" style={{ marginBottom: 3 }} />
                            <Text style={styles.TextChild}>Phân tích dữ liệu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ComponentChild6}>
                            <Ionicons name="ios-color-filter" size={22} color="white" style={{ marginBottom: 3 }} />
                            <Text style={styles.TextChild}>...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    textbold: {
        fontWeight: 'bold'
    },
    taskbarbg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 30,
        marginTop: 20,
    },
    ImgIcon: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 18,
        //padding: 20,
        paddingTop: 40,
        //marginBottom: 10,
        color: "#000"
    },
    Taskbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    Components: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    ComponentChild1: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: "#A3A3FD",
        alignItems: 'center',
        justifyContent: 'center'
    },
    ComponentChild2: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: "#75DDD2",
        alignItems: 'center',
        justifyContent: 'center'
    },
    ComponentChild3: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: "#FC9876",
        alignItems: 'center',
        justifyContent: 'center'
    },
    ComponentChild4: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: "#FFC77D",
        alignItems: 'center',
        justifyContent: 'center'
    },
    ComponentChild5: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: "#61EB34",
        alignItems: 'center',
        justifyContent: 'center'
    },
    ComponentChild6: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: "#FF2B00",
        alignItems: 'center',
        justifyContent: 'center'
    },

    TextChild: {
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default HomeScreen
