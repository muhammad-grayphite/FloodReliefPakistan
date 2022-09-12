import React from 'react'
import { Searchbar } from 'react-native-paper';


const SearchBar = ({ onChangeText, searchQuery }) => {
    return (
        <Searchbar
            placeholder="Type something..."
            onChangeText={onChangeText}
            value={searchQuery}
            placeholderTextColor={'white'}
            iconColor={'white'}
            inputStyle={{ color: 'white' }}
            style={{ backgroundColor: 'red', borderColor: '#ffff', marginTop: 10, marginHorizontal: 10, }}
        />
    )
}
export default SearchBar