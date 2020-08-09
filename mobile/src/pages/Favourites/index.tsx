import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

function Favourites() {
    const [favourites, setFavourites] = useState([]);

    function loadFavourites() {
        AsyncStorage.getItem('favourites').then(response => {
            if (response) {

                const favouritedTeachers = JSON.parse(response);

                setFavourites(favouritedTeachers);
            }
        });
    }

    useFocusEffect(
        React.useCallback(() => {
          loadFavourites();
        }, [])
      )

    return (
    <View style={styles.container}>
        <PageHeader title="Meus proffys favoritos" />

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
        >
            {favourites.map((teacher: Teacher) => {
                return (
                    <TeacherItem 
                        key={teacher.id}
                        teacher={teacher}
                        favourited={true}
                    />
                )
            })}
        </ScrollView>
    </View>
    )
}

export default Favourites;