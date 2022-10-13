import { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function InputForm({addHandler}) {

    const [text,setText] = useState('')

    const onChangeText=(value)=>{
        setText(value)
    }

    const onAddTask=()=>{
        if(text.length>0){
            addHandler(text)
            setText('')
        }
    }

  return (
    <View>
        <TextInput value={text} onChangeText={onChangeText} style={styles.input} placeholder="Input task"></TextInput>
        <Button color={'green'} onPress={onAddTask} title='Add task'/>
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    },
    button: {
        color: 'red'
    }
});
