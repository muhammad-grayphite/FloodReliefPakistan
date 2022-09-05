import React from 'react'
import { Searchbar } from 'react-native-paper';
const SearchBar = ({ onChangeSearch, searchQuery }) => {
    return (
        <Searchbar
            placeholder="Type something..."
            onChangeText={onChangeSearch}
            value={searchQuery}
            placeholderTextColor={'white'}
            iconColor={'white'}
            style={{ backgroundColor: 'red', borderColor: '#ffff', borderWidth: 1 }}
        />
    )
}
export default SearchBar