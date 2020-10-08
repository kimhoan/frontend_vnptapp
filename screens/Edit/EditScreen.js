import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Field, reduxForm } from 'redux-form';
const { width } = Dimensions.get('window')


const EditScreen = (props) => {
    const { handleSubmit, navigation } = props;
    // const dispatch = useDispatch()
    // const submit = async (values) => {
    //     try {
    //         await dispatch(AddnewAction.add_new(values.title, values.data));
    //     } catch (err) {
    //         alert(err);
    //     }
    // }
    return (
        <View style={styles.container}>
            <Text>Màn hình edit</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: 10,
    // },
    // backIcon: {
    //     position: 'absolute',
    //     top: 40,
    //     left: 20
    // },
    // button: {
    //     width: '100%',
    //     backgroundColor: 'rgba(0,182,230,1)',
    //     borderColor: Colors.Active,
    //     borderWidth: 1,
    //     borderRadius: 50,
    //     marginBottom: 20,
    // },
    // textButton: {
    //     fontWeight: "bold",
    //     color: '#fff',
    // }
})
export default EditScreen