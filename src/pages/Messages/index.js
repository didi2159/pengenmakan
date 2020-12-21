import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import { colors, fonts } from '../../utils';
import { DummyDoctor3, DummyDoctor4, DummyDoctor2,} from '../../assets';

const Messages = ({navigation}) => {
   const [doctors, setDoctors] = useState([
        {
            id: 1,
            profile: DummyDoctor3,
            name: 'Steven William',
            desc: 'Baik pak, terimakasih banyak atas wakt...'
        }, 
        {
            id: 2,
            profile: DummyDoctor4,
            name: 'Crishtable Angesty',
            desc: 'Oke tentu saja tidak,karena jeruk it...'
        },
        {
            id: 3,
            profile: DummyDoctor2,
            name: 'Jhonson',
            desc: 'oke menurut dokter bagaimana unt...'
        },
    ]);
    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <Text style={styles.title}>Messages</Text>
            {
                doctors.map(doctor => {
                    return (
                    <List 
                    key={doctor.id}
                    profile={doctor.profile}
                    name={doctor.name}
                    desc={doctor.desc}
                    onPress={() => navigation.navigate('Chatting')}
                    />
                    );
                })}
            </View>  
        </View>
    );
};

export default Messages;

const styles = StyleSheet.create({
    page: {backgroundColor: colors.secondary, flex: 1},
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    }
});