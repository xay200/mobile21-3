import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SuccessScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
       <Ionicons name="chevron-back" size={24} color="#5A6CF3"   />
      </TouchableOpacity>

      {/* Hình ảnh thanh toán thành công */}
      <Image source={require("../assets/success.png")} style={styles.successImage} />

      {/* Tiêu đề */}
      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.subtitle}>
        we will send order details and invoice in your contact no. and registered email
      </Text>

      {/* Nút Check Details */}
      <TouchableOpacity>
        <Text style={styles.checkDetails}>Check Details →</Text>
      </TouchableOpacity>

      {/* Nút Download Invoice */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    width: 45,
    height: 44,
    top: 57,
    left: 20,
    backgroundColor: "#F8F8FB",
    padding: 10,
    borderRadius: 9,
  },
  successImage: {
    width: 300.3883056640625,
    height: 250.54591369628906,
    marginBottom: 20,
   
  },
  title: {
    font: 'Helvetica Now Display',
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 0.03,
    lineHeight: 50,
    textAlign: "center",
    color: "#363636"
  },
  subtitle: {
    width: 251,
    height: 42,
    font: 'Helvetica Now Display',
    weight: 400,
    fontSize: 14,
    letterSpacing: 0.03,
    color: "#7A7A7A",
    textAlign: "center",
    marginBottom: 20,
  },
  checkDetails: {
    width: 138,
    height: 24,
    fontSize: 16,
    color: "#5A6CF3",
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  downloadButton: {
    width: 334,
    height: 62,
    backgroundColor: "#5A6CF3",
    paddingVertical: 16 ,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignItems: "center",
  },
  downloadText: {
    font: 'Helvetica Now Display',
    letterSpacing: 0.03,
    color: "white",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
});
