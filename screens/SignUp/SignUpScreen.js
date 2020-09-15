import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert, TouchableWithoutFeedback, ScrollView, Platform, KeyboardAvoidingView, Keyboard } from 'react-native'
import { Field, reduxForm } from 'redux-form';
// import * as AuthAction from '../../../redux/auth/userAction';
import * as AuthAction from '../../redux/auth/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import Colors from '../../ultils/Colors';

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Không được bỏ trống'
    } else if (values.name.length < 6) {
        errors.name = 'Nhiều hơn 6 kí tự'
    }
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
    if (!values.password_confirm) {
        errors.password = 'Không được bỏ trống'
    }
    else if (values.password !== values.password_confirm) {
        errors.password = 'Mật khẩu xác nhận không chính xác'
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
                {/* <AntDesign name={icon} size={16} color="black" /> */}
                <Input placeholder={placeholder}
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

const SignUpScreen = (props) => {
    const { handleSubmit, navigation } = props;
    const loading = useSelector(state => state.user.isLoading)
    const dispatch = useDispatch()
    const submit = async (values) => {
        //dispatch(AuthAction.register(values.name, values.email, values.password))
        try {
            await dispatch(AuthAction.register(values.name, values.email, values.password));
            //alert("Đăng kí thành công")
            //custom alert navigate to first page
            Alert.alert("Đăng kí thành công", "Bạn có thể đăng nhập để vào hệ thống", [
                {
                    text: "Nhấn vào đây để Login vào hệ thống !!!",
                    onPress: () => {
                        props.navigation.goBack();
                    },
                },
            ]);

        } catch (err) {
            alert(err);
        }
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.containerBG}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.backIcon}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Feather name="arrow-left-circle" size={28} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textSignup}>ĐĂNG KÍ THÔNG TIN</Text>
                    <View style={styles.textInputForm}>
                        <Field name="name" component={renderField} placeholder="Name" />
                        <Field name="email" component={renderField} placeholder="Email" />
                        <Field name="password" component={renderField} placeholder="Mật khẩu" />
                        <Field name="password_confirm" component={renderField} placeholder="Xác nhận lại Mật khẩu" />
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={handleSubmit(submit)}
                            style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Text style={styles.textButton}>Đăng kí</Text> */}
                            {loading ? <ActivityIndicator size="large" color={Colors.white} /> : <Text style={styles.textButton}>Đăng kí</Text>}
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>


        </KeyboardAvoidingView>

    )
}
const styles = StyleSheet.create({
    containerBG: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    container: {
        padding: 24,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        //flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    textSignup: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.Active,
        marginBottom: 20,
    },
    textInputForm: {
        width: '95%'
    },
    backIcon: {
        position: 'absolute',
        top: 40,
        left: 20
    },
    button: {
        width: '80%',
        backgroundColor: 'rgba(0,182,230,1)',
        borderColor: Colors.Active,
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 20,
    },
    textButton: {
        fontWeight: "bold",
        color: '#fff'
    }
})

export default reduxForm({
    form: 'syncValidation',
    validate,
})(SignUpScreen)