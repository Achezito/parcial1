import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from "react-native";
import React, { useState } from "react";


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const [submittedData, setSubmittedData] = useState(null); 

 
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };


  const handleSubmit = () => {
    if (!formData.id || !formData.name || !formData.email || !formData.phone) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    setSubmittedData(formData); 
    console.log("Datos enviados:", formData);
  };

  return (
    <View style={styles.container}>
      <Image
  source={{ uri: "https://static.vecteezy.com/system/resources/previews/027/127/450/non_2x/nfl-logo-nfl-icon-transparent-free-png.png" }} // URL de la imagen remota
  style={styles.image}
/>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput
        style={styles.input}
        placeholder="ID"
        onChangeText={(value) => handleChange("id", value)}
        value={formData.id}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(value) => handleChange("name", value)}
        value={formData.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Mail"
        keyboardType="email-address"
        onChangeText={(value) => handleChange("email", value)}
        value={formData.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="phone-pad"
        onChangeText={(value) => handleChange("phone", value)}
        value={formData.phone}
      />

      <Button title="SEND" onPress={handleSubmit} />

    
      {submittedData && (
        <View style={styles.output}>
          <Text>📕 Datos Enviados:</Text>
          <Text>ID: {submittedData.id}</Text>
          <Text>Nombre: {submittedData.name}</Text>
          <Text>Email: {submittedData.email}</Text>
          <Text>Teléfono: {submittedData.phone}</Text>
          <Image
            source={require("./assets/naruto.jpg")} 
            style={styles.image}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
    opacity: 0.7,
    letterSpacing: 10,
  },
  input: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  output: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10, 
    marginBottom: 10, 
  },
});

export default function App() {
  return <RegisterForm />;
}