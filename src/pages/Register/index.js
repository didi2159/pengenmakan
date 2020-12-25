import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Input, Button, Gap, Loading} from '../../components';
import {colors, useForm, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage, hideMessage} from "react-native-flash-message";

const Register = ({navigation}) => {
    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    const onContinue = () => {
        console.log(form);
        setLoading(true);
        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then(succes => {
            setLoading(false);
            setForm('reset');
            const data = {
                fullName: form.fullName,
                profession: form.profession,
                email: form.email,
            };

            Fire.database()
            .ref('users/' +succes.user.uid+ '/')
            .set(data);

            
            storeData('user', data);
            navigation.navigate('UploadPhoto')
            console.log('register succes: ', succes);
        })
       .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({ 
            message: errorMessage,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
    });
        console,log('error: ', error);
  });
    };
    return (
     <>
        <View style={styles.page}> 
            <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
            <Input
             label="Full Name" 
             value={form.fullName} 
             onChangeText={value => setForm('fullName', value)} 
             />
            <Gap height={24} />
            <Input 
            label="Pekerjaan" 
            value={form.profession} 
            onChangeText={value => setForm('profession', value)}
             />
            <Gap height={24} />
            <Input 
            label="Email"
            value={form.email} 
            onChangeText={value => setForm('email', value)}
             />
            <Gap height={24} />
            <Input 
            label="Password" 
            value={form.password} 
            onChangeText={value => setForm('password', value)} 
            secureTextEntry
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue}   />
                </ScrollView>
            </View>
        </View>
        {loading && <Loading />}  
     </>
    ); 
};

export default Register;

const styles = StyleSheet.create({
    page: {backgroundColor: colors.white, flex: 1},
    content: {padding: 40, paddingTop: 0},
});
