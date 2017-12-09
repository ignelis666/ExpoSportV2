//importuojamos bibliotekos 
import React from 'react';
import { Text, View } from 'react-native';

//kuriamas komponentas
const Header = (props) => {
    return (
        <View style={styles.viewStyle}> 
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
    backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 20
    }
  };
  export default Header;
  