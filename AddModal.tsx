import React, { useEffect, useState, useRef } from 'react';
import { Text, Dimensions, TouchableOpacity, ScrollView, View, TextInput, StyleSheet } from 'react-native';


export default function AddModal({ navigation }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [desc, setDesc] = useState('');
  const loginput = useRef(null);

  useEffect(() => {
    loginput.current.focus();
}, [])

  const addBook = async() => {
   console.log("Add Book " + " " + title + " " + author + " " + desc)
   let book = JSON.stringify({title: title, author: author, desc: desc})
    fetch("http://192.168.0.103:4000/books", {
      method: "POST",
      body: book
    }).then(res => res.json())
      .then(res => {
       console.log(res)
       navigation.navigate("Books")
      }).catch(error => {
        console.log(`${error.message}!`);
      });
}

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
    <View style={{alignItems: 'center'}}>
      <TextInput
      style={styles.input}
      ref={loginput}
                placeholder="Title"
                value={title}
                onChangeText={tit => setTitle(tit)}
                blurOnSubmit={false}
              />
              <TextInput
              style={styles.input}
                placeholder="Author"
                value={author}
                onChangeText={auth => setAuthor(auth)}
                blurOnSubmit={false}
              />
               <TextInput
               style={styles.input}
                placeholder="Description"
                value={desc}
                onChangeText={description => setDesc(description)}
                blurOnSubmit={false}
              />
             
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              >
                <TouchableOpacity
                style={styles.button}
                  onPress={() => {
                    navigation.navigate("Books")
                  }}>
                  <Text style={{fontWeight: "bold", color: "#fff"}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                  onPress={() => addBook()}>
                  <Text style={{fontWeight: "bold", color: "#fff"}}>
                    Add
                  </Text>
                </TouchableOpacity>
                </View>      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('screen').width * 0.9,
    padding: 10, 
    borderColor: 'gray', 
    borderRadius: 8, 
    borderWidth: 1, 
    margin: 5,
    fontSize: 25
  },
  button: {
    backgroundColor: '#000',
    shadowColor: 'rgba(200,200,200, 200)', 
    shadowOffset: { height: 2.5, width: 2.5 }, 
    shadowOpacity: 1, 
    shadowRadius: 1, 
    borderRadius: 5,
    elevation: 2, 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: 15,
                margin: 5,
                height: 65,
                width: 125
  }
});
