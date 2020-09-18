import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'react-native-elements';
import Colors from '../../ultils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import * as AddnewAction from '../../redux/add_new/addnewAction';

const { width } = Dimensions.get('window')

const validate = values => {
    const errors = {}
    if (!values.title) {
        errors.title = 'Không được bỏ trống'
    } else if (values.title.length < 10) {
        errors.title = 'Title nhiều hơn 10 kí tự'
    }
    if (!values.data) {
        errors.data = 'Không được bỏ trống'
    } else if (values.data.length < 10) {
        errors.data = 'Data nhiều hơn 10 kí tự'
    }

    return errors
}
const renderField = ({ placeholder, icon, meta: { touched, error, warning }, input: { onChange, ...restInput }, }) => {
    return (
        <View style={{ width }}>
            <View style={{
                flexDirection: "row",
                marginBottom: 10,
                padding: 10,
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
const AddNewScreen = (props) => {
    const { handleSubmit, navigation } = props;
    //const user = useSelector(state => state.user)
    //console.log("USERID", user.user.userId)
    //console.log("USERID1", user)
    const dispatch = useDispatch()
    const submit = async (values) => {
        try {
            await dispatch(AddnewAction.add_new(values.title, values.data));
            // Alert.alert("Submit thành công", [
            //     {
            //         text: "Nhấn vào đây để quay lại trang Home !!!",
            //         onPress: () => {
            //             props.navigation.goBack();
            //         },
            //     },
            // ]);
            Alert.alert("Submit thành công")

        } catch (err) {
            alert(err);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.backIcon}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left-circle" size={28} color="black" />
                </TouchableOpacity>
            </View>
            <Field name="title" component={renderField} placeholder="Tiêu đề" />
            <Field name="data" component={renderField} placeholder="Dữ liệu" />
            <View style={styles.button}>
                <TouchableOpacity
                    onPress={handleSubmit(submit)}
                    style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textButton}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    backIcon: {
        position: 'absolute',
        top: 40,
        left: 20
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
    form: 'syncValidation',
    validate,
})(AddNewScreen)