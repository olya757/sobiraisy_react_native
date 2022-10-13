import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({props, deleteHandler}) {
  return (
    <TouchableOpacity onPress={()=> deleteHandler(props)}>
        <Text style={styles.text} >{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text:{
        padding:20,
        textAlign:'center',
        borderRadius:5,
        backgroundColor:'#eef',
        borderWidth:1,
        marginTop: 20,
        width:'60%',
        marginLeft:'20%'
    }

});
