import React from 'react';
import {Text,View,Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const PratimDetail = ({record}) => {
    const {pratimas,Paveikslelis} = record;
    const {headerContainerStyle,headerTextStyle,imageStyle} = styles;
    return(
        <Card>
            <CardSection>
                <View style={headerContainerStyle}>
               <Text style={headerTextStyle}>{pratimas}</Text>
               </View>
            </CardSection>

             <CardSection>
                   <Image style={imageStyle}
                   source={{uri:Paveikslelis}}/>
            </CardSection>

            <CardSection>
                       <Button buttonIsPress />
             </CardSection>

        </Card>         
                    
    )
};

const styles = {
  
        headerContentStyle: {
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        headerTextStyle: {
            fontSize: 18
        },
        imageStyle: {
            height: 300,
            flex: 1,
            width: null
        }
    }

    export default PratimDetail;