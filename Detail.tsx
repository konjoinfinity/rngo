import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'

export default function Detail({route, navigation}: {route: any, navigation: any}){
  const { id, title, author, desc } = route.params;
  const [book, setBook] = useState<any>()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getBook();
    })
      return unsubscribe;
  }, [navigation])
  
  function getBook() {
        fetch(`http://192.168.0.103:4000/books/${id}`, {
          method: "GET"
        }).then(res => res.json())
          .then(res => {
            console.log(res)
           setBook(res)
          }).catch(error => {
            console.log(`${error.message}!`);
          });
    }

    function deleteBook() {
        fetch(`http://192.168.0.103:4000/books/${id}`, {
          method: "DELETE"
        }).then(res => res.json())
          .then(res => {
            console.log(res)
            Alert.alert(res, "You have deleted the book", [{text: "Ok", onPress: () => navigation.navigate('Books')}])
          }).catch(error => {
            console.log(`${error.message}!`);
          });
    }

    return (
      <View style={{ flex: 1 }}>
      <View style={{alignItems:'center', justifyContent: 'center', flexDirection:'row', 
      paddingTop: 20, paddingBottom: 20, paddingRight: 10, paddingLeft: 10, borderColor: 
      '#e7e7e6', borderRadius: 8, borderWidth: 1, margin: 10}}>
        {book &&  <View style={{flexDirection: 'column', alignItems: 'center'}}>  
      <Text style={{fontSize: 28, fontWeight: '500', paddingBottom: 10}}>{book.title}</Text>
      <Text style={{fontSize: 18, fontWeight: '400', paddingBottom: 10}}>{book.author}</Text>
      <Text style={{fontSize: 20, fontWeight: '300', paddingBottom: 10, textAlign: 'center'}}>{book.desc}</Text>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{backgroundColor: "#000", height: 75, width: 150, borderRadius: 5, justifyContent: 'center', margin: 10 }} 
      onPress={() => navigation.navigate("Edit Book",{ book: book })}>
        <Text style={{color: "#fff", fontSize: 25, alignSelf: 'center'}}>Edit</Text></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "#000", height: 75, width: 150, borderRadius: 5, justifyContent: 'center', margin: 10 }} 
      onPress={() => deleteBook()}>
        <Text style={{color: "#fff", fontSize: 25, alignSelf: 'center'}}>Delete</Text></TouchableOpacity>
        </View>
      </View>}
         </View>
      </View>
    )
}