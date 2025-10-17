import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,Image,
} from "react-native";
import ChatBubble from "./ChatBubble";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Mayng gabie", sender: "bot" },
    { id: "2", text: "Mayng gabie sad", sender: "me" },
  ]);
  const [input, setInput] = useState("");
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (input.trim().length === 0) return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "me",
    };

    setMessages([...messages, newMessage]); // add new message at the bottom
    setInput("");

    // auto scroll to bottom after sending
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Chat list */}
            

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble text={item.text} isMe={item.sender === "me"} />
        )}

        contentContainerStyle={{
          padding: 10,
          flexGrow: 1,
          justifyContent: "flex-start", // stack from top
        }}
        
        
      />

      {/* Input box */}
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#ddd",
        }}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 20,
            paddingHorizontal: 15,
          }}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={{
            marginLeft: 10,
            backgroundColor: "#0078fe",
            paddingHorizontal: 20,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}