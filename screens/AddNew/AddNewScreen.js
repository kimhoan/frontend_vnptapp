import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ActivityIndicator, Alert } from 'react-native';

import { Field, reduxForm } from 'redux-form';
import { Input } from 'react-native-elements';

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
const AddNew = (props) => {

    return (
        <View style={styles.container}>
            <Field name="email" component={renderField} placeholder="Họ và tên" />
            <Field name="password" component={renderField} placeholder="Ngày sinh" />
            <Field name="password" component={renderField} placeholder="Địa chỉ/Quê quán" />
            <Field name="password" component={renderField} placeholder="Công việc hiện tại" />
            <Field name="password" component={renderField} placeholder="Ngôn ngữ code" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flex: 1
    }
})
export default reduxForm({
    form: 'syncValidation',
    validate,
})(AddNew)