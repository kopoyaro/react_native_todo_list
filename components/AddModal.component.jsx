import React, {useState} from 'react'
import { 
  StyleSheet,View, Text, TextInput, Pressable } from 'react-native'

 const AddModal=()=> {
    
    const [newTodo, setNewTodo] = useState({});
    const [showAddModal, setShowAddModal] = useState(false);

    const handleAddModal = () => {
        setShowAddModal(true);
      }
    
      const closeAddModal = () => {
        setShowAddModal(true);
      }

     const cancel = () => {
        setShowAddModal(false);
      }

    return (<>
        <View>
        <Pressable style={styles.button} onPress={()=>handleAddModal()}>
          <Text style={{textAlign:'center', textAlignVertical:'center', color: 'white'}}>
            Ajouter
          </Text>
        </Pressable>
      </View>
        {showAddModal? 
      <View style={styles.card}>
          <TextInput style={styles.input} />
          <View style={{flexDirection:'row', justifyContent:"space-around"}}>
          <Pressable onPress={()=> addTodo()}><Text>Ajouter</Text></Pressable>
          <Pressable onPress={()=> cancel()}><Text>Annuler</Text></Pressable>
          </View>
      </View>:null
    }
    </>
    )
    
}

const styles = StyleSheet.create({
  button: {
    width:"30%",
    left:"35%",
    height:25,
    backgroundColor: "#f7797d",
    borderRadius:15,
    marginTop:25
  },
  card:{
    backgroundColor:'#F5F5F5',
    borderRadius:10,
    width:'70%',
    left:'15%',
    marginTop:50,
    overflow:'hidden'
  },
  input: {
    backgroundColor: '#E5E5E5'
  }
});

export default AddModal;
