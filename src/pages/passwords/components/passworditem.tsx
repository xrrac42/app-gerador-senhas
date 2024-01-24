import React from 'react'
import { Text, StyleSheet, Pressable} from 'react-native'

const PasswordItem = ({data, removePassword})=>{
    return(
      <Pressable onLongPress={removePassword} style={styles.container}>
        <Text style={styles.text}>
            {data}
        </Text>
      </Pressable>
        

    )
}

export default PasswordItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8
    },
    text:{
        color: "#fff"
    }
})


