import React, { useEffect, useState, useRef } from 'react';
import { Platform, Text, Dimensions, TouchableOpacity, ScrollView, View, TextInput } from 'react-native';


export default function ModalAddNoteScreen({ navigation, route }) {
  const { booktitle, bookauthor, bookdesc } = route.params;
  const [title, setTitle] = useState(booktitle);
  const [author, setAuthor] = useState(bookauthor);
  const [desc, setDesc] = useState(bookdesc);
  const loginput = useRef(null);

  useEffect(() => {
    loginput.current.focus();
}, [])

  const addBook = async() => {
   console.log("Edit Book")
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
    <View>
      <TextInput
      ref={loginput}
                placeholder="Title"
                value={title}
                onChangeText={title => setTitle(title)}
                blurOnSubmit={false}
              />
              <TextInput
                placeholder="Location"
                value={location}
                onChangeText={location => setLocation(location)}
                blurOnSubmit={false}
              />
               <TextInput
               textStyle={{color: colors.text}}
               style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background, width: parentWidth * 0.95}]}
               status='info'
                placeholder="Weather"
                value={weather}
                onChangeText={weather => setWeather(weather)}
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
                style={{  
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
                margin: 5}}
                  onPress={() => {
                    navigation.navigate("TabThree")
                  }}>
                  <Text style={{fontWeight: "bold"}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ 
                  shadowColor: 'rgba(200,200,200, 200)', 
                shadowOffset: { height: 2.5, width: 2.5 }, 
                shadowOpacity: 1, 
                shadowRadius: 1, 
                borderRadius: 5,
                elevation: 2, 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                margin: 5, padding: 15}}
                  onPress={() => editBook()}>
                  <Text style={{fontWeight: "bold"}}>
                    Save
                  </Text>
                </TouchableOpacity>
                </View>      
    </View>
    </ScrollView>
  );
}
