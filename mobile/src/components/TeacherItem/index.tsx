import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavouriteIcon from '../../assets/images/icons/unfavourite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import api from '../../services/api';

import styles from './styles';

export interface Teacher {
    
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
};

interface TeacherItemProps {
    teacher: Teacher;
    favourited: boolean;
}

const TeacherItem:React.FC<TeacherItemProps> = ({ teacher, favourited }) => {
    const [isFavourited, setIsFavourited] = useState(favourited);

    function handleLinTowhatsapp() {
        api.post('connections', {
            user_id: teacher.id,
        })

        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavourite() {
        const favourites = await AsyncStorage.getItem('favourites');

        let favouritesArray = [];
            
        if (favourites) {
            favouritesArray = JSON.parse(favourites);
        }

        if (isFavourited) {
            const favouriteIndex = favouritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });

            favouritesArray.splice(favouriteIndex, 1);

            setIsFavourited(false);
        }   else {

            favouritesArray.push(teacher);

            setIsFavourited(true);
        }

        await AsyncStorage.setItem('favourites', JSON.stringify(favouritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

                <View style={styles.profileInfo} >
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>{teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                        onPress={handleToggleFavourite}
                        style={[
                            styles.favouriteButton, 
                            isFavourited ? styles.favourited : {},
                        ]}
                    >
                        { isFavourited
                            ? <Image source={unfavouriteIcon} />
                            : <Image source={heartOutlineIcon} />
                        }
                    </RectButton>

                    <RectButton onPress={handleLinTowhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;