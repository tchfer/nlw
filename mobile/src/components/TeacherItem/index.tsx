import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavouriteIcon from '../../assets/images/icons/unfavourite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: 'https://github.com/tchfer.png' }} />

                <View style={styles.profileInfo} >
                    <Text style={styles.name}>Flavio Fernando da Silva</Text>
                    <Text style={styles.subject}>Inglês</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                English teacher @ Cultura Inglesa.
                {'\n'}{'\n'}
                Husband and dad of a beautiful family.
                I also love languages and games !
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 60,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favouriteButton, styles.favourited]}>
                        {/*<Image source={heartOutlineIcon} />*/}
                        <Image source={unfavouriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;