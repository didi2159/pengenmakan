import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILHospitalBG} from '../../assets/illustration';
import {colors, fonts} from '../../utils';
import {ListHospital} from '../../components';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '../../assets';

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background} >
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
            <ListHospital type="Rumah Sakit" name="Sehat Sejahtera" address="jl. Merdeka No 19" pic={DummyHospital1} />
            <ListHospital type="Rumah Sakit Anak" name="Happy Family&Kids" address="jl. Muhammad Hatta No 3" pic={DummyHospital2} />
            <ListHospital type="Rumah Sakit Jiwa" name="Tingkatan Paling Atas" address="jl. Sejahtera Sentosa No 1" pic={DummyHospital3} />
            </View>
        </View>
    );
};

export default Hospitals;

const styles = StyleSheet.create({
    page:{backgroundColor: colors.secondary, flex: 1},
    background: {height: 240, paddingTop: 30},
    title: { 
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.primary,
        textAlign: 'center',
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.primary,
        marginTop: 6,
        textAlign: 'center',
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginTop: -30,
        paddingTop: 14,
        paddingLeft: 16,
    }
});