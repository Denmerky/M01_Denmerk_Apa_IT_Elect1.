
import React from 'react';
import { SafeAreaView } from 'react-native';
import ChatScreen from './ChatScreen';
import CommentSection from './CommentSection'; //



export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      
      <ChatScreen />
      <CommentSection />
 
    </SafeAreaView>
  );
}
