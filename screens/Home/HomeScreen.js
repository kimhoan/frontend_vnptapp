import React, { useState, useEffect } from 'react';
import Colors from '../../ultils/Colors';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//fetch data api


const HomeScreen = () => {
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
        <View style={styles.container}>
            <Text style={styles.Text}>Xin Chào : Kim Hoàn</Text>
            <View style={styles.Taskbar}>
                <Text>16 follower</Text>
                <Text>30 Post</Text>
                <Text>20 Done</Text>
            </View>
            <View style={styles.Components}>
                {/**Post */}
                <TouchableOpacity style={styles.ComponentChild1}>
                    <Text style={styles.TextChild}>Nhập liệu</Text>
                </TouchableOpacity>
                {/**Update */}
                <TouchableOpacity style={styles.ComponentChild2}>
                    <Text style={styles.TextChild}>Thay đổi thông tin</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Components}>
                {/**Get */}
                <TouchableOpacity style={styles.ComponentChild3}>
                    <Text style={styles.TextChild}>Thống kê</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ComponentChild4}>
                    <Text style={styles.TextChild}>Thông tin biểu đồ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Components}>
                <TouchableOpacity style={styles.ComponentChild1}>
                    <Text style={styles.TextChild}>Phân tích dữ liệu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ComponentChild2}>
                    <Text style={styles.TextChild}>Quản lý</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 20,
        paddingTop: 40,
        marginBottom: 10,
        color: Colors.Active
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
    TextChild: {
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default HomeScreen
