
import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FlashList } from "@shopify/flash-list";

export default function Books({navigation}: {navigation: any}) {
  const [books, setBooks] = useState<any[]>([])

  useEffect(() => {
    getBooks();
  }, [])
  
  function getBooks() {
        fetch("http://192.168.0.103:4000/books", {
          method: "GET"
        }).then(res => res.json())
          .then(res => {
           setBooks(res)
          }).catch(error => {
            console.log(`${error.message}!`);
            
          });
    }

  return (
    <View  style={{flex:1, padding: 10}}>
      <FlashList
      data={books}
      renderItem={({ item }) => <View style={{alignItems:'center', justifyContent: 'center', flexDirection:'row', 
      paddingTop: 20, paddingBottom: 20, paddingRight: 10, paddingLeft: 10, borderColor: '#e7e7e6', borderRadius: 8, borderWidth: 1, margin: 10}}>
     <View style={{flexDirection: 'column', alignItems: 'center'}}>  
      <Text style={{fontSize: 28, fontWeight: '500', paddingBottom: 10}}>{item.title}</Text>
      <Text style={{fontSize: 18, fontWeight: '400', paddingBottom: 10}}>{item.author}</Text>
      <Text style={{fontSize: 20, fontWeight: '300', paddingBottom: 10, textAlign: 'center'}}>{item.desc}</Text>
      <TouchableOpacity style={{backgroundColor: "#000", height: 75, width: 250, borderRadius: 5, alignSelf: 'center', justifyContent: 'center' }} 
      onPress={() => navigation.navigate('Book Detail',{ id: item.id })}>
        <Text style={{color: "#fff", fontSize: 25, alignSelf: 'center'}}>Details</Text></TouchableOpacity>
      </View></View>}
      estimatedItemSize={200}/>
    </View>
  );
}
