import React, {useState} from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import EditModal from './EditModal.component';

const List = () => {
    const [todos, setTodos] = useState([{task:"des trucs",state:"encours"}]);
     const [showEditModal, setShowEditModal] = useState(false);

  const handleEditModal = () => {
    setShowEditModal(true);
  }

    return (
        <>
        {showEditModal?
        <EditModal></EditModal>: null}
        <View>
        <View style={styles.row}>
          <Text>Tâche</Text>
          <Text>Etat</Text>
          <Text>Action</Text>
        </View>
        
      {todos.map(todo =>{
        return(
        <View style={styles.row}>
          <Text>{todo.task}</Text>
          <Text>{todo.state} </Text>
          <Pressable style={styles.button} onPress={()=>handleEditModal()}>
            <Text style={styles.buttonText}>éditer</Text>
          </Pressable>
        </View>)
      })}
      </View>
      </>
    )
}

const styles = StyleSheet.create({
  row:{
    flexDirection:"row",
    justifyContent:'space-around',
    paddingBottom:10
  },
  button: {
    width:"20%",
    backgroundColor: "#f7797d",
    borderRadius:15,
  },
  buttonText:{
    textAlign:'center',
    color:'white',
  }
});

export default List;