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
            style={{ backgroundColor: 'red', borderColor: '#ffff', borderWidth: 1, color: 'white' }}
        />
    )
}
export default SearchBar