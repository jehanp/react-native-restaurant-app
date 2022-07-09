import React, {useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput
                autoCorrect={false}
                autoCapitalize='none'
                style={styles.inputStyle}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgray',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,
    }
});

export default SearchBar;