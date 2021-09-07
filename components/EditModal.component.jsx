import React, {useState} from 'react'
import { View, Text } from 'react-native'

export default function EditModal() {
    const closeEditModal = () => {
        setShowEditModal(false);
      }

    return (
        <View>
            <Text>EDIT</Text>
        </View>
    )
}
