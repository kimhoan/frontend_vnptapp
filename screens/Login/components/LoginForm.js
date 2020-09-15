import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ActivityIndicator, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Field, reduxForm } from 'redux-form'
import * as AuthAction from '../../../redux/auth/userAction'
import { useDispatch, useSelector } from 'react-redux'
import Colors from '../../../ultils/Colors';
import { Input } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Không được bỏ trống'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Địa chỉ Email không hợp lệ'
    }
    if (!values.password) {
        errors.password = 'Không được bỏ trống'
    } else if (values.password.length < 6) {
        errors.password = 'Nhiều hơn 6 kí tự'
    }

    return errors
}

const renderField = ({ placeholder, icon, meta: { touched, error, warning }, input: { onChange, ...restInput }, }) => {
    return (
        <View>
            <View style={{
                flexDirection: "row",
                width: '96%',
                marginBottom: 10,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Input placeholder={placeholder}
                    //secureTextEntry={true}
                    onChangeText={onChange}
                    style={{
                        height: '100%', width: '100%', fontSize: 16
                    }} {...restInput} />
            </View>
            {/* Bao loi */}
            {touched && error && (
                <Text style={{ color: 'red', marginVertical: 5 }}>{error}</Text>
            )}
        </View>
    )
}


const LoginForm = (props) => {
    const { handleSubmit, navigation } = props;
    // su dung dispatch cập nhật action trong login,cập nhật values username password
    const loading = useSelector(state => state.user.isLoading)
    const dispatch = useDispatch()
    const submit = async (values) => {
        try {
            await dispatch(AuthAction.login(values.email, values.password))
            //neu thanh cong thi xu li tai day
        } catch (err) {
            alert(err)
        }
    }
    return (
        // <ImageBackground blurRadius={4} source={require('../../../images/bglogin3.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
            <Field name="email" component={renderField} placeholder="Tài khoản" icon='user' />
            <Field name="password" component={renderField} placeholder="Mật khẩu" icon='lock' />
            <View style={styles.buttonGroup}>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={handleSubmit(submit)}
                        style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                        {loading ? <ActivityIndicator size="large" color={Colors.white} /> : <Text style={styles.textButton}>Login</Text>}
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.navigate('ForgetPwScreen')}>
                        <Text style={styles.textButton}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        // </ImageBackground>

    )
}

const styles = StyleSheet.create({
    // backgroundImage: {
    //     flex: 1,
    //     resizeMode: 'cover',
    // },
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    Login: {
        marginBottom: 20,
        borderRadius: 5,
        height: 50,
        backgroundColor: '#26389C',
    },
    formBackGround: {
        flexDirection: "row",
        borderRadius: 5,
        height: 50,
        width: 300,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    buttonGroup: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        backgroundColor: 'rgba(0,182,230,1)',
        borderColor: Colors.Active,
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 20,
    },
    textButton: {
        fontWeight: "bold",
        color: '#fff',
    }
})

export default reduxForm({
    form: 'syncValidation',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form                   // <--- warning function given to redux-form
})(LoginForm)

