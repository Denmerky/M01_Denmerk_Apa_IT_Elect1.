import Student from './Student';
import React from 'react';
import { SafeAreaView } from 'react-native';
//import ChatScreen from './ChatScreen';
//import CommentSection from './CommentSection'; //

//adjust path if in components folder

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      
      <Student />
 
    </SafeAreaView>
  );
}