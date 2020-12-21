import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {DummyDoctor5 } from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header
            type="dark"
            title="Pilih Dokter Anak"
            onPress={() => navigation.goBack()}
            />
            <List
             type="next"
             profile={DummyDoctor5}
             name="Maria Audrey"
             desc="wanita"
             onPress={() => navigation.navigate('Chatting')}
             />
            <List
             type="next"
             profile={DummyDoctor5}
             name="Maria Audrey" desc="wanita"
            />
            <List
             type="next"
             profile={DummyDoctor5}
             name="Maria Audrey"
             desc="wanita"
             />
            <List
            type="next"
            profile={DummyDoctor5}
            name="Maria Audrey"
            desc="wanita"
            />
            <List
            type="next"
            profile={DummyDoctor5}
            name="Maria Audrey"
            desc="wanita"
            />
        </View>
    );
};

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {backgroundColor: colors.white, flex: 1},
});